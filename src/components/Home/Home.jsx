import React from "react";
import "./Home.css";
import SeasonsList from "../SeasonsList/SeasonsList";

function Home() {
  return (
    <div className="bg-danger home-container">
      <h1 className="home-title">Bienvenue sur Smallville Memory Lane</h1>
      <p className="home-description">
        Explorez les saisons, les épisodes et les lieux emblématiques de
        Smallville !
      </p>
      <SeasonsList />
    </div>
  );
}

export default Home;
