// src/components/ClubGlass.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function ClubGlass() {
  const navigate = useNavigate();

  return (
    <section className="card glass-section">
      <h2 className="section-title">Актуальные клубы</h2>

      <div className="glass-club">
        <div className="club-info">
          <p className="club-name">Философия и классика</p>
          <p className="club-count">Участников: 120</p>
        </div>
        <button
          className="btn-glass"
          onClick={() => navigate("/clubs/philosophy")}
        >
          Вступить
        </button>
      </div>

      <div className="glass-club">
        <div className="club-info">
          <p className="club-name">Современная проза</p>
          <p className="club-count">Участников: 85</p>
        </div>
        <button
          className="btn-glass"
          onClick={() => navigate("/clubs/prose")}
        >
          Вступить
        </button>
      </div>
    </section>
  );
}

export default ClubGlass;
