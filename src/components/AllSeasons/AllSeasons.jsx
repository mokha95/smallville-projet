import "./AllSeasons.css"; // Ajout du fichier CSS pour les styles personnalisés
import { Link } from "react-router-dom";
import seasonsSmallville from "../../data/seasonsSmallville";

function AllSeasons() {
  return (
    <>
      <h2 className="mt-5 persoTitre">Saisons </h2>
      <div className="personnagesSamallville mt-5 pb-5">
        {seasonsSmallville.map((saisons) => (
          <div key={saisons.id} className="personnage">
            <Link to={`/season/${saisons.id}`} className="linkSeason">
              <div className="persoCard">
                <img src={saisons.image} alt={saisons.title}></img>
                <p>
                  {" "}
                  <button className="btnNom">{saisons.title} </button>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllSeasons;
