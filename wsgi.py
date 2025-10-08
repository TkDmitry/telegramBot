from main import app
import os
from dotenv import load_dotenv

load_dotenv()

if __name__ == '__main__':
    host = os.getenv("FLASK_HOST", "0.0.0.0")
    port = int(os.getenv("FLASK_PORT", 5000))
    
    print(f"🚀 Запуск Flask сервера на {host}:{port} с HTTPS")
    # Передаем пути к сертификату и ключу в app.run
    app.run(
        host=host,
        port=port,
        debug=False,
        ssl_context=('cert.pem', 'key.pem')  # Вот эта строка включает HTTPS
    )