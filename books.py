# bot/routes/books.py
from flask import Blueprint, request, jsonify
from database import database

books_bp = Blueprint('books', __name__)

@books_bp.route('/api/add_book', methods=['POST'])
async def add_book():
    try:
        data = request.get_json()
        
        tg_id = data.get('tg_id')
        book_title = data.get('book_title')
        author = data.get('author')
        
        if not all([tg_id, book_title, author]):
            return jsonify({"error": "Все поля обязательны"}), 400
        
        # Используем асинхронный метод из вашей database.py
        result = await database.add_user_book(
            user_id=tg_id,
            book_title=book_title,
            author=author
        )
        
        if result:
            return jsonify({
                "message": "Книга успешно добавлена",
                "book_title": result["book_title"]
            }), 200
        else:
            return jsonify({"error": "Не удалось добавить книгу"}), 500
            
    except Exception as e:
        print(f"Ошибка при добавлении книги: {e}")
        return jsonify({"error": "Внутренняя ошибка сервера"}), 500