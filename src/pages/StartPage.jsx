import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import RecommendationGlass from "../components/RecommendationGlass";
import ClubGlass from "../components/ClubGlass";
import LibraryGlass from "../components/LibraryGlass";
import NewsGlass from "../components/NewsGlass";
import '../ui.css';

function StartPage() {
  const navigate = useNavigate();

  return (
    
    <div className="page main">

      {/* Хедер */}
     
            
      <header className="card header">
        <div className="header-top" style={{textAlign: 'right', padding: '0',
          margin: '0'}}>
          <h1 className="brand-title" style={{
                fontFamily: "'Playfair Display SC', serif",
                color: '#BA6830',
                fontSize: '44px',
                margin: 0,
                padding: 0
              }}>BookRandomCafe</h1>
          <p className="subtitle" style={{
                fontFamily: "'Playfair Display SC', serif",
                color: '#BA6830',
                fontSize: '12px',
                margin: 0,
                padding: 0
              }}>Чтение, обсуждение, дружба</p>
        </div>

        <div className="header-actions-inline">
        <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate('/profile')}
          >
            Добавить книгу
          </button>
          <button className="btn btn-secondary btn-lg" disabled>
            Прочитано книг: 42
          </button>

        </div>
      </header>


      {/* Быстрые действия
      <section className="card quick-actions">
        <button className="btn btn-secondary" onClick={() => navigate('/matches')}>🤝 Совпадения</button>
        <button className="btn btn-secondary" onClick={() => navigate('/profile')}>👤 Профиль</button>
        <button className="btn btn-secondary" onClick={() => navigate('/quotes')}>💬 Цитаты</button>
        <button className="btn btn-secondary" onClick={() => navigate('/clubs')}>📚 Клубы</button>
        <button className="btn btn-secondary" onClick={() => navigate('/socionics')}>🧩 Соционика</button>
      </section> */}

      {/* Рекомендации */}
      <RecommendationGlass />
      {/* Рекомендации */}
      {/* <section className="card">
        <h2>✨ Рекомендации сегодня</h2>
        <div className="recommendations">
          <div className="recommendation">
            <blockquote>
              «И мы живём, не замечая чудес, пока кто-то не напомнит нам о них.»
            </blockquote>
            <p className="text-secondary">Из книги: "Мастер и Маргарита"</p>
            <button className="btn btn-primary" onClick={() => navigate('/matches')}>
              Найти единомышленников
            </button>
          </div>
          <div className="recommendation">
            <blockquote>
              «Чтение — это беседа с самыми лучшими людьми прошедших веков.»
            </blockquote>
            <p className="text-secondary">Из книги: "Размышления"</p>
            <button className="btn btn-primary" onClick={() => navigate('/matches')}>
              Совпадения по цитате
            </button>
          </div>
        </div>
      </section> */}

      {/* Книжные клубы */}
      <ClubGlass />
      {/* Книжные клубы */}
      {/* <section className="card">
        <h2>📚 Актуальные клубы</h2>
        <ul className="list">
          <li className="list-item">
            Философия и классика — участников: 120
            <button className="btn btn-secondary" onClick={() => navigate('/clubs/philosophy')}>Вступить</button>
          </li>
          <li className="list-item">
            Современная проза — участников: 85
            <button className="btn btn-secondary" onClick={() => navigate('/clubs/prose')}>Вступить</button>
          </li>
        </ul>
      </section> */}

      {/* Моя библиотека */}
      <LibraryGlass />
      {/* <section className="card">
        <h2>📖 Моя библиотека</h2>
        <p>Прочитано: 42 | Читаю сейчас: 3 | Хочу прочитать: 15</p>
        <button className="btn btn-primary" onClick={() => navigate('/profile')}>Открыть</button>
      </section> */}

      {/* Новости и события */}
      <NewsGlass />
      {/* <section className="card">
        <h2>🎉 Новости и события</h2>
        <ul className="list">
          <li className="list-item">
            Онлайн-дискуссия по «1984» завтра в 19:00
            <button className="btn btn-secondary">Подробнее</button>
          </li>
          <li className="list-item">
            Читательский челлендж: «7 книг за октябрь»
            <button className="btn btn-secondary">Присоединиться</button>
          </li>
        </ul>
      </section> */}

      {/* Навигация */}
      <NavBar active="home" />
    </div>
  );
}

export default StartPage;
