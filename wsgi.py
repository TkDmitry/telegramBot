from main import app
import os
from dotenv import load_dotenv

load_dotenv()

if __name__ == '__main__':
    host = os.getenv("FLASK_HOST", "0.0.0.0")
    port = int(os.getenv("FLASK_PORT", 5000))
   
    
    print(f"🚀 Запуск Flask сервера на {host}:{port}")
    app.run(host=host, port=port, debug=True)