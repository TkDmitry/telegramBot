import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';   // ✅ импортируем useNavigate
import NavBar from '../components/NavBar/NavBar'; // ✅ добавлен импорт
import '../ui.css';

function SocionicsModule() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate(); // ✅ инициализация

  const handleStartTest = () => {
    navigate('/socionics/test'); // или любой путь, который ты задал для SocionicsTest
  };


  return (
    <div className="page main">
      <section className="card">
        <h2>🧩 Соционический тест</h2>
        {!result ? (
          <>
            <p>Пройди адаптированный тест (60–80 вопросов), чтобы определить свой тип.</p>
            <button className="btn btn-primary" onClick={handleStartTest}>
              Пройти тест
            </button>
          </>
        ) : (
          <p>Ваш результат: {result.type}</p>
        )}
      </section>

      {/* Расшифровка типа */}
      <section className="card">
        <h2>📖 Расшифровка типа</h2>
        <p><strong>Достоевский (INFj)</strong></p>
        <p className="text-secondary">
          Эмпатичный, ценит гармонию и глубокие связи. Склонен к рефлексии и поиску смысла.
        </p>
      </section>

      {/* Таблица совместимости */}
      <section className="card">
        <h2>🔗 Совместимость</h2>
        <div className="compatibility-grid">
          <div className="cell good">Дуал</div>
          <div className="cell ok">Зеркало</div>
          <div className="cell neutral">Родственный</div>
          <div className="cell bad">Конфликт</div>
        </div>
      </section>

      {/* Icebreakers */}
      <section className="card">
        <h2>💡 Советы и icebreakers</h2>
        <ul className="list">
          <li className="list-item">Спроси о любимой книге детства.</li>
          <li className="list-item">Поделись цитатой, которая тебя вдохновляет.</li>
          <li className="list-item">Обсуди, какой герой ближе всего по характеру.</li>
        </ul>
      </section>
      {/* Навигация */}
      <NavBar active="socionics" />
    </div>
  );
}

export default SocionicsModule;
