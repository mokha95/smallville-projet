import React from "react";
import season1Image from "../../assets/img/smallville-saison-1.1.jpg";
import "./Season1.css";

function Season1() {
  return (
    <div className="season-container">
      <div className="season-header">
        <h1 className="season-title">Saison 1</h1>
        <p className="season-meta">
          Diffusée du 16 octobre 2001 au 21 mai 2002 • 21 épisodes.
        </p>
      </div>

      <div className="season-hero">
        <img className="season-image" src={season1Image} alt="Saison 1" />
        <div className="season-highlights">
          <p>
            La série pose les bases : l&apos;arrivée de Clark à Smallville, la
            découverte progressive de ses pouvoirs et les premiers secrets de la
            famille Luthor.
          </p>
          <ul className="season-list">
            <li>La pluie de météorites et ses conséquences.</li>
            <li>Les débuts de l&apos;amitié Clark / Lex.</li>
            <li>Le lien grandissant avec Lana Lang.</li>
          </ul>
        </div>
      </div>

      <section className="season-section">
        <h3>Synopsis</h3>
        <p>
          Clark Kent apprend à vivre avec ses capacités extraordinaires tout en
          restant un adolescent ordinaire. Entre nouveaux ennemis, secrets
          familiaux et responsabilités, il découvre peu à peu l&apos;origine de
          sa force et la raison de sa présence sur Terre.
        </p>
      </section>
    </div>
  );
}
export default Season1;
