import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  d-flex  justify-content-between">
      <div className="container ">
        {/* Logo ou titre */}

        {/* Bouton burger en mobile */}
        <button
          className="navbar-toggler z-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/Accueil" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Home" className="nav-link">
                Explorer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/PlaceList" className="nav-link">
                La Serie
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Personnages" className="nav-link">
                Les Personnages
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Boutique" className="nav-link">
                Boutique
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Films" className="nav-link">
                Films
              </Link>
            </li>
          </ul>
        </div>
        <div className="liensConnect">
          <Link className="navbar-brand" to="/Signup">
            Inscription
          </Link>
          <Link className="navbar-brand" to="/Signin">
            Connexion
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
