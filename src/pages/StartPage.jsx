import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import '../ui.css'; // новый зелёно-золотой UI-kit

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      {/* Хедер */}
      <header className="page-header">
        <div className="header-content">
          <h1 className="app-title">BOOKRANDOMCAFE</h1>
          <div className="header-stats">
            <span className="books-count">Прочитано книг: 42</span>
            <button 
              className="btn btn-primary add-book-btn"
              onClick={() => navigate('/add-book')}
            >
              Добавить книгу
            </button>
          </div>
        </div>
      </header>

      {/* Быстрые действия */}
      <section className="quick-actions">
        <div className="actions-grid">
          <button className="action-btn" onClick={() => navigate('/matches')}>
            <span className="action-icon">👥</span>
            Совпадения
          </button>
          <button className="action-btn" onClick={() => navigate('/profile')}>
            <span className="action-icon">👤</span>
            Профиль
          </button>
          <button className="action-btn" onClick={() => navigate('/quotes')}>
            <span className="action-icon">💬</span>
            Мои цитаты
          </button>
          <button className="action-btn" onClick={() => navigate('/clubs')}>
            <span className="action-icon">📚</span>
            Книжные клубы
          </button>
        </div>
      </section>

      {/* Рекомендации */}
      <section className="recommendations">
        <h2 className="section-title">Рекомендации сегодня</h2>
        <div className="recommendations-grid">
          <div className="quote-card">
            <div className="quote-content">
              «И мы живём, не замечая чудес, пока кто-то не напомнит нам о них.»
            </div>
            <div className="quote-source">Из книги: "Мастер и Маргарита"</div>
            <button className="btn btn-secondary">Найти единомышленников</button>
          </div>
          
          <div className="quote-card">
            <div className="quote-content">
              «Чтение — это беседа с самыми лучшими людьми прошедших веков.»
            </div>
            <div className="quote-source">Из книги: "Размышления"</div>
            <button className="btn btn-secondary">Совпадения по цитате</button>
          </div>
        </div>
      </section>

      {/* Актуальные клубы */}
      <section className="clubs-section">
        <h2 className="section-title">Актуальные клубы</h2>
        <div className="clubs-list">
          <div className="club-card">
            <div className="club-info">
              <h3>ОНЛАЙН-ДИСКУССИЯ ПО «1984»</h3>
              <p>Завтра в 19:00</p>
            </div>
            <button className="btn btn-outline">ВСТУПИТЬ</button>
          </div>
          
          <div className="club-card">
            <div className="club-info">
              <h3>ФИЛОСОФИЯ И КЛАССИКА</h3>
              <p>Участников: 120</p>
            </div>
            <button className="btn btn-outline">ВСТУПИТЬ</button>
          </div>
        </div>
      </section>

      {/* Моя библиотека */}
      <section className="library-stats">
        <div className="stats-card">
          <h2>Моя библиотека</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">42</div>
              <div className="stat-label">Прочитано</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Читаю сейчас</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">33</div>
              <div className="stat-label">Хочу прочитать</div>
            </div>
          </div>
          <button className="btn btn-primary">Открыть библиотеку</button>
        </div>
      </section>

      {/* Навигация */}
      <NavBar active="home" />
    </div>
  );
}

export default StartPage;