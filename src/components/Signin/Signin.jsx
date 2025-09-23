import React from "react";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";

// "SignIn" se traduit en français par "Se connecter".
export default function Signin() {
  return (
    <div>
      <p>page de connexion</p>
      {/* <Link to="/Signup">Inscription</Link> */}
      <Link to="/">Revenir a la Page d&apos;accueil</Link>
    </div>
  );
}
