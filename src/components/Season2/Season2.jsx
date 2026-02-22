import React from "react";
import season2Image from "../../assets/img/smallville-saison-3-.jpg"; // Importez l'image de la saison 2

import "./Season2.css";

function Season2() {
  return (
    <div className="season-container">
      <div className="season-header">
        <h1 className="season-title">Saison 2</h1>
        <p className="season-meta">
          Diffusée du 24 septembre 2002 au 20 mai 2003 • 23 épisodes.
        </p>
      </div>

      <div className="season-hero">
        <img className="season-image" src={season2Image} alt="Saison 2" />
        <div className="season-highlights">
          <p>
            Cette saison approfondit les secrets de Smallville et les liens
            entre Clark, Lana et Lex, avec l&apos;introduction de nouvelles
            menaces.
          </p>
          <ul className="season-list">
            <li>Les grottes Kawatche et leur prophétie.</li>
            <li>L&apos;ombre grandissante de Lionel Luthor.</li>
            <li>Les pouvoirs de Clark se développent.</li>
          </ul>
        </div>
      </div>

      <section className="season-section">
        <h3>Synopsis</h3>
        <p>
          Clark poursuit son apprentissage tout en protégeant ses proches. Les
          secrets des Kawatche révèlent un destin plus vaste, tandis que les
          tensions avec la famille Luthor s&apos;intensifient.
        </p>
      </section>
    </div>
  );
}
export default Season2;
