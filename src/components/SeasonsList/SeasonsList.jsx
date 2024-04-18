import React from "react";
import "./SeasonsList.css";
import season1Image from "../../assets/img/smallville-saison-1.1.jpg"; // Importez l'image de la saison 1
import season2Image from "../../assets/img/smallville-saison-3-.jpg"; // Importez l'image de la saison 2
import season3Image from "../../assets/img/smallville-saison-1.jpg"; // Importez l'image de la saison 2
import season4Image from "../../assets/img/smallville-saison-4.jpg"; // Importez l'image de la saison 2
import season5Image from "../../assets/img/smallville-saison-5.jpg"; // Importez l'image de la saison 2

function SeasonsList() {
  return (
    <div className="p-4 seasons-list ">
      <h2>Liste des saisons</h2>
      <ul>
        <li className="season">
          <h3>Saison 1</h3>
          <img src={season1Image} alt="Saison 1" />{" "}
          {/* Utilisez l'image de la saison 1 */}
          {/* Ajoutez d'autres épisodes ici */}
        </li>
        <li className="season">
          <h3>Saison 2</h3>
          <img src={season2Image} alt="Saison 2" />{" "}
          {/* Utilisez l'image de la saison 2 */}
          {/* Ajoutez d'autres épisodes ici */}
        </li>
        <li className="season">
          <h3>Saison 3</h3>
          <img src={season3Image} alt="Saison 3" />{" "}
          {/* Utilisez l'image de la saison 3 */}
          {/* Ajoutez d'autres épisodes ici */}
        </li>
        <li className="season">
          <h3>Saison 4</h3>
          <img src={season4Image} alt="Saison 4" />{" "}
          {/* Utilisez l'image de la saison 4 */}
          {/* Ajoutez d'autres épisodes ici */}
        </li>
        <li className="season">
          <h3>Saison 5</h3>
          <img src={season5Image} alt="Saison 5" />{" "}
          {/* Utilisez l'image de la saison 5 */}
          {/* Ajoutez d'autres épisodes ici */}
        </li>
        {/* Ajoutez d'autres saisons ici */}
      </ul>
    </div>
  );
}

export default SeasonsList;
