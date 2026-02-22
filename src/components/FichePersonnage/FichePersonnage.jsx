import { Link, useParams } from "react-router-dom";
import persosSmallville from "../../data/persosSmallville";
import "./FichePersonnage.css";

export default function FichePersonnage() {
  // Récupère l'id depuis l'URL (ex: /fichePersonnage/8)
  const { id } = useParams();
  // Cherche le personnage correspondant dans le tableau de données
  const personnage = persosSmallville.find(
    (perso) => String(perso.id) === String(id),
  );

  // Si aucun personnage ne correspond à l'id, on affiche un message d'erreur
  if (!personnage) {
    return (
      <div className="fiche-container">
        <h2 className="fiche-title">Personnage introuvable</h2>
        <p className="fiche-text">
          Ce personnage n&apos;existe pas. Vérifie l&apos;URL ou reviens à la
          liste.
        </p>
        <Link className="fiche-back" to="/Accueil">
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="fiche-container">
      <div className="fiche-card">
        {/* Image principale du personnage */}
        <img
          className="fiche-image"
          src={personnage.imageUrl}
          alt={personnage.prenom}
        />
        <div className="fiche-content">
          {/* Nom + badge du rôle */}
          <div className="fiche-header">
            <h1 className="fiche-title">{personnage.prenom}</h1>
            {personnage.role && (
              <span className="fiche-badge">{personnage.role}</span>
            )}
          </div>
          {/* Texte principal */}
          <p className="fiche-text fiche-lead">{personnage.description}</p>
          {/* Détails supplémentaires si disponibles */}
          {personnage.details && (
            <p className="fiche-text">{personnage.details}</p>
          )}
          {personnage.biography && (
            <div className="fiche-biography">
              <h2 className="fiche-section-title">Biographie</h2>
              <ul className="fiche-list">
                {personnage.biography.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="fiche-divider" />
          {/* Bouton de retour */}
          <Link className="fiche-back" to="/Accueil">
            Retour aux personnages
          </Link>
        </div>
      </div>
    </div>
  );
}
