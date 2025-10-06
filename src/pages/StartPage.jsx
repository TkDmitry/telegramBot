import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import RecommendationGlass from "../components/RecommendationGlass";
import ClubGlass from "../components/ClubGlass";
import LibraryGlass from "../components/LibraryGlass";
import NewsGlass from "../components/NewsGlass";
import "../ui.css";

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="page main">
      {/* Хедер */}
      <header className="card header">
        <div className="header-top">
          <h1 className="brand-title">BookRandomCafe</h1>
          <p className="subtitle">Чтение, обсуждение, дружба</p>
        </div>

        <div className="header-actions-inline">
          <button className="btn btn-secondary btn-lg" disabled>
            Прочитано книг: 42
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate("/profile")}
          >
            Добавить книгу
          </button>
        </div>
      </header>

      {/* Рекомендации */}
      <RecommendationGlass />

      {/* Книжные клубы */}
      <ClubGlass />

      {/* Моя библиотека */}
      <LibraryGlass />

      {/* Новости и события */}
      <NewsGlass />

      {/* Навигация */}
      <NavBar active="home" />
    </div>
  );
}

export default StartPage;
