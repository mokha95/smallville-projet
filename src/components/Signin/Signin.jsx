import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

// "SignIn" se traduit en français par "Se connecter".
export default function Signin() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Connexion</h2>
          <p className="auth-subtitle">
            Ravi de vous revoir. Connectez-vous pour continuer l&apos;aventure.
          </p>
        </div>

        <form className="auth-form">
          <div className="auth-field">
            <label htmlFor="signin-email" className="auth-label">
              Email
            </label>
            <input
              id="signin-email"
              type="email"
              className="auth-input"
              placeholder="vous@exemple.com"
              autoComplete="email"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="signin-password" className="auth-label">
              Mot de passe
            </label>
            <input
              id="signin-password"
              type="password"
              className="auth-input"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="auth-button">
            Se connecter
          </button>
        </form>

        <p className="auth-footer">
          Pas encore de compte ?{" "}
          <Link className="auth-link" to="/Signup">
            Créer un compte
          </Link>
        </p>
        <p className="auth-footer">
          <Link className="auth-link" to="/">
            Revenir à la page d&apos;accueil
          </Link>
        </p>
      </div>
    </div>
  );
}
