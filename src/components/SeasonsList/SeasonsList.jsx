import "./SeasonsList.css";
import { Link } from "react-router-dom";
import seasonsSmallville from "../../data/seasonsSmallville";

function SeasonsList() {
  return (
    <div className="p-4 seasons-list ">
      <h2>Liste des saisons</h2>
      <ul>
        {seasonsSmallville.map((season) => (
          <li key={season.id} className="season">
            <Link to={`/season/${season.id}`} className="season-link">
              <h3>{season.title}</h3>
              <img src={season.image} alt={season.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SeasonsList;
