from neo4j import AsyncGraphDatabase
import os
from dotenv import load_dotenv

# Загружаем переменные окружения из .env файла
load_dotenv()

class Neo4jDatabase:
    def __init__(self):
        self.uri = os.getenv("NEO4J_URI", "bolt://localhost:7687")
        self.username = os.getenv("NEO4J_USERNAME", "neo4j")
        self.password = os.getenv("NEO4J_PASSWORD")
        self.driver = None

    async def connect(self):
        """Создание подключения к базе данных"""
        self.driver = AsyncGraphDatabase.driver(
            self.uri, 
            auth=(self.username, self.password)
        )
        # Проверяем подключение
        await self.verify_connection()

    async def verify_connection(self):
        """Проверка подключения к БД"""
        try:
            async with self.driver.session() as session:
                await session.run("RETURN 1 as test")
            print("✅ Успешное подключение к Neo4j!")
        except Exception as e:
            print(f"❌ Ошибка подключения к Neo4j: {e}")
            raise

    async def close(self):
        """Закрытие подключения"""
        if self.driver:
            await self.driver.close()

    async def create_user(self, user_id: int, username: str, first_name: str = None):
        """Создание или обновление пользователя в БД"""
        query = """
        MERGE (u:User {tg_id: $user_id})
        SET u.username = $username,
            u.first_name = $first_name,
            u.last_activity = datetime()
        RETURN u
        """
        async with self.driver.session() as session:
            result = await session.run(query, user_id=user_id, username=username, first_name=first_name)
            return await result.single()

    # Add these methods to your Neo4jDatabase class in database.py

    async def add_user_book(self, user_id: int, book_title: str, author: str):
        """Add a book and mark that a user has read it"""
        query = """
        MERGE (u:User {tg_id: $user_id})
        MERGE (b:Book {title: $book_title, author: $author})
        MERGE (u)-[r:READ]->(b)
        SET r.timestamp = datetime()
        RETURN b.title as book_title
        """
        async with self.driver.session() as session:
            result = await session.run(query, user_id=user_id, book_title=book_title, author=author)
            return await result.single()

    async def add_quote_with_emotion(self, user_id: int, quote_text: str, book_title: str, emotion_name: str):
        """Add a quote and link it to a book, user, and emotion"""
        query = """
        MATCH (u:User {tg_id: $user_id})
        MATCH (b:Book {title: $book_title})
        MERGE (e:Emotion {name: $emotion_name})
        CREATE (q:Quote {text: $quote_text, timestamp: datetime()})
        CREATE (u)-[:MARKED]->(q)
        CREATE (q)-[:FROM_BOOK]->(b)
        CREATE (q)-[:FELT]->(e)
        RETURN q.text as quote_text
        """
        async with self.driver.session() as session:
            result = await session.run(query, user_id=user_id, quote_text=quote_text, book_title=book_title, emotion_name=emotion_name)
            return await result.single()

    async def find_matches(self, user_id: int):
        """Find users who marked the same quotes and the shared emotions"""
        query = """
        MATCH (me:User {tg_id: $user_id})-[:MARKED]->(quote:Quote)<-[:MARKED]-(other:User)
        MATCH (quote)-[:FELT]->(emotion)
        WHERE me <> other
        RETURN other.tg_id as user_id, 
            quote.text as quote_text,
            collect(DISTINCT emotion.name) as shared_emotions
        ORDER BY count(quote) DESC
        """
        async with self.driver.session() as session:
            result = await session.run(query, user_id=user_id)
            return [{"user_id": record["user_id"], "quote": record["quote_text"], "shared_emotions": record["shared_emotions"]} for record in result]

# Глобальный экземпляр базы данных
database = Neo4jDatabase()