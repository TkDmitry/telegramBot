// src/components/HeaderGlass.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddBookModal from "./AddBookModal";

function HeaderGlass() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [telegramUser, setTelegramUser] = useState(null);

  // Инициализация Telegram Web App при загрузке компонента
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      
      // Расширяем приложение на весь экран
      tg.expand();
      
      // Получаем данные пользователя
      const user = tg.initDataUnsafe?.user;
      console.log("Telegram User Data:", user); // Для отладки
      
      if (user && user.id) {
        setTelegramUser(user);
      } else {
        console.warn("Данные пользователя Telegram не доступны");
      }
    } else {
      console.error("Telegram Web App API не доступен");
    }
  }, []);

  // Функция для отправки данных на бэкенд
  const handleAddBook = async (bookData) => {
    try {
      // Проверяем, что данные пользователя доступны
      if (!telegramUser || !telegramUser.id) {
        alert('Ошибка: данные пользователя Telegram не загружены. Пожалуйста, перезагрузите приложение.');
        return;
      }

      console.log("Отправляемые данные:", {
        tg_id: telegramUser.id,
        book_title: bookData.title,
        author: bookData.author
      });

      const response = await fetch('https://31.133.125.78/api/add_book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tg_id: telegramUser.id, // Используем ID из состояния
          book_title: bookData.title,
          author: bookData.author
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Книга добавлена:', result);
        alert('✅ Книга успешно добавлена!');
      } else {
        const errorData = await response.json();
        console.error('Ошибка при добавлении книги:', errorData);
        alert(`❌ Ошибка: ${errorData.error || 'Неизвестная ошибка'}`);
      }
    } catch (error) {
      console.error('Ошибка сети:', error);
      alert('❌ Сетевая ошибка: ' + error.message);
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
            Прочитано книг: 42
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