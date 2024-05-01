import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ characters }) => {
  // Extraction des propriétés du personnage à partir des props
  const { name, role, biography, motivations, evolution, imageUrl } =
    characters;

  return (
    <div className="character-card">
      <img src={imageUrl} alt={name} className="character-image" />
      <div className="character-details">
        <h2>{name}</h2>
        <p>
          <strong>Rôle :</strong> {role}
        </p>
        <p>
          <strong>Biographie :</strong> {biography}
        </p>
        <p>
          <strong>Motivations :</strong> {motivations}
        </p>
        <p>
          <strong>Évolution :</strong> {evolution}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
