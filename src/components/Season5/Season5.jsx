import React from "react";
import season5Image from "../../assets/img/smallville-saison-5.jpg";
import "./Season5.css";

export default function Season5() {
  return (
    <div className="season-container">
      <div className="season-header">
        <h1 className="season-title">Saison 5</h1>
        <p className="season-meta">
          Diffusée du 29 septembre 2005 au 11 mai 2006 • 22 épisodes.
        </p>
      </div>

      <div className="season-hero">
        <img className="season-image" src={season5Image} alt="Saison 5" />
        <div className="season-highlights">
          <p>
            La relation Clark / Lex atteint un point critique tandis que de
            nouvelles menaces cosmiques se profilent.
          </p>
          <ul className="season-list">
            <li>La Forteresse de Solitude et son héritage.</li>
            <li>Brainiac, un nouvel ennemi redoutable.</li>
            <li>Des choix décisifs pour l&apos;avenir de Clark.</li>
          </ul>
        </div>
      </div>

      <section className="season-section">
        <h3>Synopsis</h3>
        <p>
          Clark doit faire face à des enjeux plus grands que jamais. Entre
          conflits personnels et menaces planétaires, cette saison prépare la
          transition vers sa destinée de héros.
        </p>
      </section>
    </div>
  );
}
