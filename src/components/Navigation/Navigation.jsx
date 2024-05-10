import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          {/* Naavigation */}
          <Link to="/Accueil" className="navigation-link">
            Accueil
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/Home" className="navigation-link">
            Explorer
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/PlaceList" className="navigation-link">
            La Serie
          </Link>
        </li>
        {/* <li className="navigation-item">
          <Link to="/characters" className="navigation-link">
            les épisodes
          </Link>
        </li> */}
        <li className="navigation-item">
          <Link to="/Personnages" className="navigation-link">
            les Personnages
          </Link>
        </li>
        {/* <li className="navigation-item">
          <Link to="/community" className="navigation-link">
            Communauté
          </Link>
        </li> */}
        <li className="navigation-item">
          <Link to="/Boutique" className="navigation-link">
            Boutique
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
