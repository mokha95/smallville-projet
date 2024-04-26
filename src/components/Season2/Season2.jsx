import React from "react";
import season2Image from "../../assets/img/smallville-saison-3-.jpg"; // Importez l'image de la saison 2

import "./Season2.css";

function Season2() {
  return (
    <div className="season-container">
      <h1 className="season-title">Saison 2</h1>
      <p>
        La deuxième saison de Smallville a été diffusée pour la première fois le
        24 septembre 2002 et s'est terminée le 20 mai 2003, comprenant un total
        de 23 épisodes.
      </p>

      <div className="saison1">
        <img src={season2Image} alt="Saison 2" />
      </div>

      <div className="infos">
        <h3 id="Synopsis">Synopsis</h3>
        <p>
          Dans cette saison, Clark Kent continue de découvrir et de développer
          ses pouvoirs alors qu'il affronte de nouveaux défis et dangers à
          Smallville. Il doit jongler avec ses responsabilités en tant que héros
          naissant tout en essayant de mener une vie normale d'adolescent.
        </p>
      </div>
    </div>
  );
}
export default Season2;
