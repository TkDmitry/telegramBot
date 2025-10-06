// src/components/LibraryGlass.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function LibraryGlass() {
  const navigate = useNavigate();

  return (
    <section className="card glass-section">
      <h2 className="section-title">Моя библиотека</h2>

      <div className="glass-library">
        <div className="library-stats">
          <p className="library-line">📘 Прочитано: <strong>42</strong></p>
          <p className="library-line">📖 Читаю сейчас: <strong>3</strong></p>
          <p className="library-line">📚 Хочу прочитать: <strong>15</strong></p>
        </div>

        <div className="progress-bar">
          <div className="progress" style={{ width: "72%" }}></div>
        </div>

        <button className="btn-glass" onClick={() => navigate("/profile")}>
          Открыть
        </button>
      </div>
    </section>
  );
}

export default LibraryGlass;
