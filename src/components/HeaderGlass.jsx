// src/components/HeaderGlass.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderGlass() {
  const navigate = useNavigate();

  return (
    <header className="card glass-header">
      <h1 className="brand-title">BookRandomCafe</h1>
      <p className="subtitle">Читай, обсуждай, дружи</p>

      <div className="header-actions-inline">
        <button
          className="btn-glass"
          onClick={() => navigate("/profile")}
        >
          Добавить книгу
        </button>
        <div className="btn-glass status">
          Прочитано книг: 42
        </div>
      </div>
    </header>
  );
}

export default HeaderGlass;
