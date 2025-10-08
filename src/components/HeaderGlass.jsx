// src/components/HeaderGlass.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import AddBookModal from "AddBookModal";

function HeaderGlass() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

    // Функция для отправки данных на бэкенд
  const handleAddBook = async (bookData) => {
    try {
          // Получаем данные пользователя из Telegram Web App
          const tgData = window.Telegram.WebApp.initDataUnsafe?.user;
          
          const response = await fetch('http://localhost:5000/api/add_book', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              tg_id: tgData?.id, // ID пользователя в Telegram
              book_title: bookData.title,
              author: bookData.author
            }),
          });
    
          if (response.ok) {
            const result = await response.json();
            console.log('Книга добавлена:', result);
            // Можно добавить уведомление об успехе
            alert('Книга успешно добавлена!');
          } else {
            console.error('Ошибка при добавлении книги');
            alert('Ошибка при добавлении книги');
          }
        } catch (error) {
          console.error('Ошибка сети:', error);
          alert('Сетевая ошибка');
        }
    };
    

  return (
    <>
    <header className="card glass-header">
      <h1 className="brand-title">BookRandomCafe</h1>
      <p className="subtitle">Читай, обсуждай, дружи</p>

      <div className="header-actions-inline">
        <button
            className="btn-glass"
            onClick={() => setIsModalOpen(true)}
          >
            Добавить книгу
          </button>
        <div className="btn-glass status">
            <button
            className="btn-glass"
            onClick={() => navigate("/profile")}
            >
            Прочитано книг: 42
            </button>
        </div>
      </div>
    </header>

    <AddBookModal
     isOpen={isModalOpen}
     onClose={() => setIsModalOpen(false)}
     onSubmit={handleAddBook}
     />
    </>
  );
}

export default HeaderGlass;
