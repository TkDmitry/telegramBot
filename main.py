import asyncio
from aiogram import Bot, Dispatcher, Router
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.types import Message, InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from aiogram.filters import Command
from aiogram.fsm.storage.memory import MemoryStorage
from flask import Flask
from flask_cors import CORS 
from flask import jsonify 
from database import database  # Your existing database instance
import asyncio


from database import database  # Импортируем экземпляр базы данных

from books import books_bp
# Create the Flask app first
app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "https://tkdmitry.github.io"])

@app.errorhandler(500)
def internal_server_error(error):
    # Формируем JSON-ответ с ошибкой
    response = jsonify({"error": "Internal Server Error"})
    response.status_code = 500

    # Вручную устанавливаем CORS-заголовки
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    # При необходимости, добавьте другие заголовки:
    # response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    # response.headers['Access-Control-Allow-Headers'] = 'Content-Type'

    return response

# Import and register your blueprint
from books import books_bp
app.register_blueprint(books_bp)


TOKEN = "8348782064:AAHJVoZLD3lH63rzSJjoqcPNWlhcZqjUnLQ"

# Инициализация бота с parse_mode
bot = Bot(token=TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))
dp = Dispatcher(storage=MemoryStorage())
router = Router()

@router.message(Command("start"))
async def start_handler(message: Message):
    # Сохраняем пользователя в БД при команде /start
    await database.create_user(
        user_id=message.from_user.id,
        username=message.from_user.username,
        first_name=message.from_user.first_name
    )
    
    markup = InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="🎁 Открыть BookRandomCafe", web_app=WebAppInfo(url="https://tkdmitry.github.io/telegramBot"))],
            [InlineKeyboardButton(text="📚 Документация", web_app=WebAppInfo(url="https://tkdmitry.github.io/telegramBot/docs"))]
        ]
    )
    await message.answer("🧩 Добро пожаловать в BookRandomCafe! Нажмите кнопку ниже чтобы открыть сообщество:", reply_markup=markup)

# Пример обработчика для добавления книги
# Add this to your main.py
@router.message(Command("add_book"))
async def add_book_handler(message: Message):
    # Example command: /add_book "Преступление и наказание" "Ф.М. Достоевский"
    try:
        # Simple parsing (you might want to make this more robust)
        parts = message.text.split('"')
        if len(parts) < 3:
            await message.answer('❌ Use: /add_book "Book Title" "Author"')
            return
            
        title = parts[1]
        author = parts[3]
        
        result = await database.add_user_book(
            user_id=message.from_user.id,
            book_title=title,
            author=author
        )
        
        if result:
            await message.answer(f"📚 Book '{result['book_title']}' was added to your library!")
        else:
            await message.answer("❌ Failed to add the book.")
            
    except Exception as e:
        await message.answer(f"❌ Error: {str(e)}")

# Добавь команды для работы с цитатами
@router.message(Command("add_quote"))
async def add_quote_handler(message: Message):
    # /add_quote "Текст цитаты" "Название книги" "Эмоция"
    pass

@router.message(Command("my_quotes"))
async def my_quotes_handler(message: Message):
    # Показать цитаты пользователя
    pass

@router.message(Command("find_matches"))
async def find_matches_handler(message: Message):
    # Найти пользователей для обсуждения
    matches = await database.find_matches(message.from_user.id)
    # Отправить список совпадений

dp.include_router(router)

async def main():
    # Подключаемся к БД перед запуском бота
    await database.connect()
    
    try:
        print("🚀 Бот запущен...")
        await dp.start_polling(bot)
    finally:
        # Закрываем подключение к БД при остановке бота
        await database.close()

if __name__ == "__main__":
    asyncio.run(main())