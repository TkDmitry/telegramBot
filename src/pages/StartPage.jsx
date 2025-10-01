import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import '../ui.css'; // подключаем UI-kit

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="page main">
      {/* Хедер */}
      <header className="card" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>FinTech Mini App</h1>
        <div>
          <span className="text-secondary">Баланс: 1200 T</span>
          <button className="btn btn-primary" style={{marginLeft: '12px'}} onClick={() => navigate('/kyc')}>
            Пополнить
          </button>
        </div>
      </header>

      {/* Быстрые действия */}
      <section className="card" style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
        <button className="btn btn-secondary" onClick={() => navigate('/marketplace')}>Маркетплейс</button>
        <button className="btn btn-secondary" onClick={() => navigate('/collection')}>Моя коллекция</button>
        <button className="btn btn-secondary" onClick={() => navigate('/kyc')}>Кошелёк</button>
        <button className="btn btn-secondary" onClick={() => navigate('/profile')}>Профиль</button>
      </section>

     {/* Рекомендации */}
     <section>
        <h2>Рекомендации сегодня</h2>
        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
          <div className="card" style={{flex: '1 1 45%'}}>
            <img src="/nft1.png" alt="NFT #021" style={{width: '100%', borderRadius: '8px', marginBottom: '8px'}} />
            <p className="text-secondary">Автор: ArtistX</p>
            <p>Цена: 75 T</p>
            <button className="btn btn-primary">Купить</button>
          </div>
          <div className="card" style={{flex: '1 1 45%'}}>
            <img src="/nft2.png" alt="NFT #087" style={{width: '100%', borderRadius: '8px', marginBottom: '8px'}} />
            <p className="text-secondary">Стикер Pack A</p>
            <p>Цена: 25 T</p>
            <button className="btn btn-primary">Купить</button>
          </div>
        </div>
      </section>

      {/* Коллекции */}
      <section>
        <h2>Актуальные коллекции</h2>
        <ul className="list">
          <li className="list-item">
            Сезон 1 — новые релизы: 12
            <button className="btn btn-secondary" onClick={() => navigate('/collection/season1')}>Открыть</button>
          </li>
          <li className="list-item">
            Мем-арт — новые релизы: 7
            <button className="btn btn-secondary" onClick={() => navigate('/collection/meme')}>Открыть</button>
          </li>
        </ul>
      </section>

      {/* Сводка активов */}
      <section className="card">
        <h2>Мои активы</h2>
        <p>Всего NFT: 18 | На продаже: 4 | Оценка портфеля: 2340 T</p>
        <button className="btn btn-primary" onClick={() => navigate('/collection')}>Перейти</button>
      </section>

      {/* Новости */}
      <section>
        <h2>Новости и события</h2>
        <ul className="list">
          <li className="list-item">
            Дроп «Легенды» завтра в 18:00
            <button className="btn btn-secondary">Подробнее</button>
          </li>
          <li className="list-item">
            Премиум Хедж: новый опцион RUB/EUR до 500 €
            <button className="btn btn-secondary">Управлять</button>
          </li>
        </ul>
      </section>

      {/* Навигация */}
      <NavBar active="home" />
    </div>
  );
}

export default MainPage;