import React from "react";
import season4Image from "../../assets/img/smallville-saison-4.jpg";
import "./Season4.css";

export default function Season4() {
  return (
    <div className="season-container">
      <div className="season-header">
        <h1 className="season-title">Saison 4</h1>
        <p className="season-meta">
          Diffusée du 22 septembre 2004 au 18 mai 2005 • 22 épisodes.
        </p>
      </div>

      <div className="season-hero">
        <img className="season-image" src={season4Image} alt="Saison 4" />
        <div className="season-highlights">
          <p>
            L&apos;arrivée de Lois Lane change la dynamique du groupe et Clark
            se retrouve au cœur d&apos;une quête mystérieuse.
          </p>
          <ul className="season-list">
            <li>Introduction de Lois Lane à Smallville.</li>
            <li>La recherche des pierres de pouvoir.</li>
            <li>Un destin qui se précise pour Clark.</li>
          </ul>
        </div>
      </div>

      <section className="season-section">
        <h3>Synopsis</h3>
        <p>
          Clark doit composer avec de nouvelles révélations sur son origine et
          une quête qui pourrait tout changer. Entre amour, amitié et devoir, la
          saison 4 pose les bases d&apos;une transformation majeure.
        </p>
      </section>
    </div>
  );
}
