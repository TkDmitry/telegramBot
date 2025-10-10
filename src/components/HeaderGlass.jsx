// src/components/HeaderGlass.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddBookModal from "./AddBookModal";

function HeaderGlass() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isTelegramEnv, setIsTelegramEnv] = useState(false);

  // Определяем, находимся ли мы в Telegram Mini Apps или в браузере
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    
    if (tg) {
      // Режим Telegram Mini Apps
      setIsTelegramEnv(true);
      tg.expand();
      const user = tg.initDataUnsafe?.user;
      
      if (user && user.id) {
        setUserId(user.id);
        console.log("Telegram User ID:", user.id);
      } else {
        console.warn("Не удалось получить user_id из Telegram");
      }
    } else {
      // Режим разработки (браузер)
      setIsTelegramEnv(false);
      // Пробуем получить test_user_id из localStorage
      const testUserId = localStorage.getItem('test_user_id');
      if (testUserId) {
        setUserId(testUserId);
      } else {
        // Если test_user_id нет, создаем случайный для демонстрации
        const randomUserId = Math.floor(100000000 + Math.random() * 900000000);
        localStorage.setItem('test_user_id', randomUserId.toString());
        setUserId(randomUserId.toString());
        console.log("Сгенерирован тестовый user_id:", randomUserId);
      }
    }
  }, []);

  // Функция для смены тестового user_id в режиме разработки
  const changeTestUserId = () => {
    if (!isTelegramEnv) return;
    
    const newUserId = prompt('Введите новый test_user_id (число):');
    if (newUserId && !isNaN(newUserId)) {
      localStorage.setItem('test_user_id', newUserId);
      setUserId(newUserId);
      alert(`Test user_id изменен на: ${newUserId}`);
    }
  };

  // Функция для отправки данных на бэкенд
  const handleAddBook = async (bookData) => {
    if (!userId) {
      alert('Ошибка: user_id не установлен');
      return;
    }
  
    try {
      console.log("Отправка данных...");
  
      const response = await fetch('http://localhost:5000/api/add_book', { // Убрали хост и порт Используйте HTTPS
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tg_id: userId,
          book_title: bookData.title,
          author: bookData.author
        }),
      });
  
      console.log("Получен ответ, статус:", response.status);
  
      if (!response.ok) {
        // Пытаемся прочитать ошибку от сервера
        let errorMsg = `HTTP Error: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMsg = errorData.error || errorMsg;
        } catch (e) {
          // Если не удалось распарсить JSON с ошибкой, используем стандартный текст
          errorMsg = await response.text() || errorMsg;
        }
        throw new Error(errorMsg);
      }
  
      const result = await response.json();
      console.log('Книга добавлена:', result);
      alert('✅ Книга успешно добавлена!');
  
    } catch (error) {
      console.error('Полная ошибка:', error);
      alert('❌ Не удалось добавить книгу: ' + error.message);
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
          
          {/* Показываем информацию о user_id и кнопку для его изменения в режиме разработки */}
          {!isTelegramEnv && (
            <button
              className="btn-glass status"
              onClick={changeTestUserId}
              title="Изменить тестовый user_id"
            >
              Test User: {userId}
            </button>
          )}
          
          {isTelegramEnv && (
            <button
            className="btn-glass status"
            onClick={changeTestUserId}
            title="Изменить тестовый user_id"
          >
            Test User: {userId}
          </button>
          )}
          {/* <div className="btn-glass status"
            onClick={() => navigate("/profile")}>
            Прочитано книг: 42
          </div> */}
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


