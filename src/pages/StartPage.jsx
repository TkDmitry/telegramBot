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
        <div className="w-full min-h-screen flex items-center justify-center bg-white" data-model-id="1645:17553-frame">
          <div className="font-['Playfair_Display_SC'] font-normal text-[#ba6830] text-[42px] tracking-[0] leading-[normal]">
            BookRandomCafe
          </div>
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
