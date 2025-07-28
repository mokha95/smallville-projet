import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActorFiche from "../ActorFiche/ActorFiche";

// Récupération de la clé API depuis les variables d'environnement
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export default function FilmsDetails() {
  // State pour stocker les informations du film
  const [films, setFilm] = useState(null);

  // State pour gérer le chargement
  const [loading, setLoading] = useState(true);

  // State pour gérer les erreurs
  const [error, setError] = useState("");

  // Récupération de l'ID du film depuis les paramètres de l'URL
  const { id } = useParams();

  // useEffect qui se déclenche au montage du composant ou quand l'ID change
  useEffect(() => {
    async function filmDetails() {
      try {
        // Appel API pour récupérer les infos du film selon son ID
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`
        );

        // Vérification si la réponse est correcte (sinon on déclenche une erreur)
        if (!response.ok) {
          setError("Une erreur est survenue lors du chargement du film");
          setLoading(false);
          return; // On arrête la fonction si erreur
        }

        // Conversion de la réponse en JSON
        const filmsDetails = await response.json();

        // Mise à jour du state avec les données récupérées
        setFilm(filmsDetails);

        // On indique que le chargement est terminé
        setLoading(false);
      } catch (error) {
        // Gestion des erreurs (ex: problème de connexion API)
        setError("Erreur réseau ou problème avec le serveur");
        setLoading(false);
        console.error("Erreur lors du chargement :", error);
      }
    }

    // Exécution de la fonction
    filmDetails();
  }, [id]); // Dépendance sur l'ID pour relancer si l'utilisateur change de film

  // ============================
  // 1. Gestion de l'état "loading"
  // ============================
  if (loading) {
    return <p className="text-center mt-5 fs-4">Chargement de la page...</p>;
  }

  // ============================
  // 2. Gestion de l'état "error"
  // ============================
  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      </div>
    );
  }

  // ============================
  // 3. Affichage principal quand tout va bien
  // ============================
  return (
    <div className="container my-5">
      <div className="row">
        {/* Colonne gauche - Affiche du film */}
        <div className="col-md-4">
          <div className="card shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${films.poster_path}`} // Affiche du film
              alt={films.title}
              className="card-img-top rounded"
            />
          </div>
        </div>

        {/* Colonne droite - Informations sur le film */}
        <div className="col-md-8">
          {/* Titre du film */}
          <h2 className="fw-bold mb-2">{films.title}</h2>

          {/* Note du film affichée dans un badge */}
          <span className="badge bg-success fs-6 mb-3">
            ⭐ {films.vote_average.toFixed(1)} / 10
          </span>

          {/* Date de sortie */}
          <p className="text-primary mb-3">
            Date de sortie : {films.release_date}
          </p>

          {/* Synopsis du film */}
          <p className="lead">{films.overview}</p>

          {/* Infos supplémentaires (langue, durée, statut) */}
          <div className="mt-4">
            <p>
              <strong>Langue originale :</strong>{" "}
              {films.original_language.toUpperCase()}
            </p>
            <p>
              <strong>Durée :</strong> {films.runtime} min
            </p>
            <p>
              <strong>Statut :</strong> {films.status}
            </p>
          </div>

          {/* Bouton pour visiter le site officiel du film */}
          <div className="mt-3">
            <a
              href={films.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary me-2"
            >
              Voir le site officiel
            </a>
          </div>
          <ActorFiche />
        </div>
      </div>
    </div>
  );
}
