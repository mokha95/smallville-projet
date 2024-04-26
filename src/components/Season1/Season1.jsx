import React from "react";
import season1Image from "../../assets/img/smallville-saison-1.1.jpg";
import "./Season1.css";

function Season1() {
  return (
    <div className="season-container">
      <h1 className="season-title">Saison 1</h1>
      <p>
        La première saison de Smallville est diffusée du 16 Octobre 2001, sur le
        réseau de télévision WB, et se termine le 21 mai 2002 avec 21 épisodes.
      </p>

      <div className="saison1">
        <img src={season1Image} alt="Saison 1" />
      </div>

      <div className="infos">
        <h3 id="Synopsis">Synopsis</h3>
        <p>
          On découvre l'histoire d'un jeune garçon nommé Clark Kent qui fût
          trouvé enfant par les Kent qui l'ont adopté et élevé comme leur fils,
          mais il ne vient pas de la Terre et possède des pouvoirs qu'il doit
          cacher au monde pour sa propre sécurité. Mais il doit aussi faire face
          à des difficultés liées à son passé car la pluie de météorites qui l'a
          amené sur terre a transformé certains humains en psychopathe ayant des
          pouvoirs surnaturels.
        </p>
      </div>
    </div>
  );
}
export default Season1;
