import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import RecommendationGlass from "../components/RecommendationGlass";
import ClubGlass from "../components/ClubGlass";
import LibraryGlass from "../components/LibraryGlass";
import NewsGlass from "../components/NewsGlass";
import HeaderGlass from "../components/HeaderGlass"
import "../ui.css";

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="page main">
      {/* Хедер */}
      <HeaderGlass />

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
