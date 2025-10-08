# wsgi.py
from main import app  # Импортируем Flask app из вашего основного файла

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')