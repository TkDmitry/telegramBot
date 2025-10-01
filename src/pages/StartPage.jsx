import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="page main">
      {/* Хедер */}
      <header className="header">
        <h1>FinTech Mini App</h1>
        <div className="header-actions">
          <span className="balance">Баланс: 1200 T</span>
          <button onClick={() => navigate('/wallet')}>Пополнить</button>
        </div>
      </header>

      {/* Быстрые действия */}
      <section className="quick-actions">
        <button onClick={() => navigate('/marketplace')}>Маркетплейс</button>
        <button onClick={() => navigate('/collection')}>Моя коллекция</button>
        <button onClick={() => navigate('/kyc')}>Кошелёк</button>
        <button onClick={() => navigate('/profile')}>Профиль</button>
      </section>

      {/* Рекомендации */}
      <section className="recommendations">
        <h2>Рекомендации сегодня</h2>
        <div className="items">
          <div className="item">
            <img src="/nft1.png" alt="NFT #021" />
            <p>Автор: ArtistX</p>
            <p>Цена: 75 T</p>
            <button>Купить</button>
          </div>
          <div className="item">
            <img src="/nft2.png" alt="NFT #087" />
            <p>Стикер Pack A</p>
            <p>Цена: 25 T</p>
            <button>Купить</button>
          </div>
        </div>
      </section>

      {/* Коллекции */}
      <section className="collections">
        <h2>Актуальные коллекции</h2>
        <ul>
          <li>
            Сезон 1 — новые релизы: 12
            <button onClick={() => navigate('/collection/season1')}>Открыть</button>
          </li>
          <li>
            Мем-арт — новые релизы: 7
            <button onClick={() => navigate('/collection/meme')}>Открыть</button>
          </li>
        </ul>
      </section>

      {/* Сводка активов */}
      <section className="portfolio">
        <h2>Мои активы</h2>
        <p>Всего NFT: 18 | На продаже: 4 | Оценка портфеля: 2340 T</p>
        <button onClick={() => navigate('/collection')}>Перейти</button>
      </section>

      {/* Новости */}
      <section className="news">
        <h2>Новости и события</h2>
        <ul>
          <li>Дроп «Легенды» завтра в 18:00 <button>Подробнее</button></li>
          <li>Премиум Хедж: новый опцион RUB/EUR до 500 € <button>Управлять</button></li>
        </ul>
      </section>

      {/* Навигация */}
      <footer className="navbar">
        <button onClick={() => navigate('/')}>Главная</button>
        <button onClick={() => navigate('/marketplace')}>Маркетплейс</button>
        <button onClick={() => navigate('/collection')}>Коллекция</button>
        <button onClick={() => navigate('/wallet')}>Кошелёк</button>
        <button onClick={() => navigate('/profile')}>Профиль</button>
      </footer>
    </div>
  );
}

export default StartPage;
