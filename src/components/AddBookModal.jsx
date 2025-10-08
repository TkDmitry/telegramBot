// src/components/AddBookModal.jsx
import React, { useState } from 'react';

function AddBookModal({ isOpen, onClose, onSubmit }) {
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title: bookTitle, author: author });
    // Очистка формы после отправки
    setBookTitle('');
    setAuthor('');
    onClose(); // Закрытие модального окна
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal card">
        <h2>Добавить новую книгу</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="bookTitle">Название книги</label>
            <input
              type="text"
              id="bookTitle"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Автор</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Отмена
            </button>
            <button type="submit" className="btn-primary">
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBookModal;