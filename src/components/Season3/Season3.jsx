import React from "react";
import season3Image from "../../assets/img/smallville-saison-3.jpg"; // Importez l'image de la saison 3
import "./Season3.css";

function Season3() {
  return (
    <div className="season-container">
      <div className="season-header">
        <h1 className="season-title">Saison 3</h1>
        <p className="season-meta">
          Diffusée du 1er octobre 2003 au 19 mai 2004 • 22 épisodes.
        </p>
      </div>

      <div className="season-hero">
        <img className="season-image" src={season3Image} alt="Saison 3" />
        <div className="season-highlights">
          <p>
            Les secrets éclatent, les alliances se fragilisent et de nouveaux
            ennemis menacent Smallville. Clark est poussé à faire des choix
            difficiles.
          </p>
          <ul className="season-list">
            <li>Conflits autour de Lex et Lionel Luthor.</li>
            <li>Arrivée de nouveaux météorites infectés.</li>
            <li>Évolution de la relation Clark / Lana.</li>
          </ul>
        </div>
      </div>

      <section className="season-section">
        <h3>Synopsis</h3>
        <p>
          Les conséquences de la saison précédente se font sentir. Entre secrets
          révélés, pressions familiales et menace grandissante, Clark tente de
          protéger Smallville tout en gardant son identité secrète.
        </p>
      </section>
    </div>
  );
}

export default Season3;
