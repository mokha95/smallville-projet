import React from "react";
import { useParams } from "react-router-dom"; // Importation de useParams pour récupérer les paramètres d'URL

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export default function FilmsDetails() {
  // Récupérer l'ID de l'URL
  const { id, title } = useParams();

  return (
    <div>
      {/* Affichage de l'ID récupéré de l'URL */}
      <h1>Films {id}</h1>
      <p className="text-center">{title}</p>
    </div>
  );
}
