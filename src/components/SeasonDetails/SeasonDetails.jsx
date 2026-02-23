import { Link, useParams } from "react-router-dom";
import seasonsSmallville from "../../data/seasonsSmallville";
import "./SeasonDetails.css";

export default function SeasonDetails() {
  // Récupère l'id depuis l'URL (ex: /season/3)
  const { id } = useParams();
  // Convertit l'id (string) en nombre
  const seasonId = Number(id);
  // Sélectionne la saison correspondante dans le tableau
  const season = seasonsSmallville.find((item) => item.id === seasonId);

  // Si l'id ne correspond pas à une saison, on affiche un message
  if (!season) {
    return (
      <div className="season-details-container">
        <div className="season-details-empty">
          <h1>Saison {id}</h1>
          <p>Cette saison n&apos;est pas encore disponible.</p>
          <Link className="season-details-back" to="/Accueil">
            Retour aux saisons
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="season-details-container">
      <div className="season-details-header">
        <h1 className="season-details-title">{season.title}</h1>
        <p className="season-details-meta">
          {season.yearRange} • {season.episodes} épisodes
        </p>
      </div>
      <div className="season-details-hero">
        <img
          className="season-details-image"
          src={season.image}
          alt={season.title}
        />
        <div className="season-details-summary">
          <p>{season.synopsis}</p>
          {season.highlights?.length > 0 && (
            <ul>
              {season.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="season-details-actions">
        <Link className="season-details-back" to="/Accueil">
          Retour aux saisons
        </Link>
      </div>
    </div>
  );
}
