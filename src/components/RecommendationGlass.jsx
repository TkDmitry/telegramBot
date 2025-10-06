// src/components/RecommendationGlass.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function RecommendationGlass() {
  const navigate = useNavigate();

  return (
    <section className="card glass-section">
      <h2 className="section-title">Рекомендации сегодня</h2>

      <div className="glass-buttons">
        <button className="btn-glass" onClick={() => navigate("/matches")}>
          Совпадения
        </button>
        <button className="btn-glass" onClick={() => navigate("/profile")}>
          Профиль
        </button>
        <button className="btn-glass" onClick={() => navigate("/quotes")}>
          Мои цитаты
        </button>
        <button className="btn-glass" onClick={() => navigate("/clubs")}>
          Книжные клубы
        </button>
      </div>

      <div className="glass-quote">
        <p className="quote-text">
          И мы живём, не замечая чудес, пока кто-то не напомнит нам о них.
        </p>
        <p className="quote-source">Из книги: Мастер и Маргарита</p>
        <button className="btn-glass" onClick={() => navigate("/matches")}>
          Найти единомышленников
        </button>
      </div>

      <div className="glass-quote">
        <p className="quote-text">
          Чтение — это беседа с самыми лучшими людьми прошедших веков.
        </p>
        <p className="quote-source">Из книги: Размышления</p>
        <button className="btn-glass" onClick={() => navigate("/matches")}>
          Совпадения по цитате
        </button>
      </div>
    </section>
  );
}

export default RecommendationGlass;
