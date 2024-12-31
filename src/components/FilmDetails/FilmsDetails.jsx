import React from "react";
import { useParams } from "react-router-dom"; // Importation de useParams pour récupérer les paramètres d'URL

export default function FilmsDetails() {
  // Récupérer l'ID de l'URL
  const { id } = useParams();

  return (
    <div>
      {/* Affichage de l'ID récupéré de l'URL */}
      <h1>Films {id}</h1>
    </div>
  );
}
