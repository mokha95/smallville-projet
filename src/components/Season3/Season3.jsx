import React from "react";
import season3Image from "../../assets/img/smallville-saison-1.jpg"; // Importez l'image de la saison 3
import "./Season3.css";

function Season3() {
  return (
    <div className="season-container">
      <h1 className="season-title">Saison 3</h1>
      <p>
        La deuxième saison de Smallville a été diffusée pour la première fois le
        24 septembre 2002 et s'est terminée le 20 mai 2003, comprenant un total
        de 23 épisodes.
      </p>

      <div className="saison1">
        <img src={season3Image} alt="Saison 3" />
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

export default Season3;
