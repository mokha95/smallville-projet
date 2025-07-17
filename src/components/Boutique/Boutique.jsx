import React, { useState } from "react";
import { useEffect } from "react";
import clarki from "../../assets/img/Boutique/tshirt-smallville.jpg";
import tasse from "../../assets/img/Boutique/tasse.jpg";
import telephone from "../../assets/img/Boutique/telephone.jpg";
import tshirt2 from "../../assets/img/Boutique/teshirt2.jpg";
import tshirtSmallville from "../../assets/img/Boutique/tshirt-smallville.jpg";
import tshirt3 from "../../assets/img/Boutique/tshirt3.jpg";
import tshirt4 from "../../assets/img/Boutique/tshirt4.jpg";
import tshirt5 from "../../assets/img/Boutique/tshirt5.jpg";
import tshirt7 from "../../assets/img/Boutique/tshirt7.jpg";
import tshirt10 from "../../assets/img/Boutique/tshirt10.jpg";
import tshirtcrows from "../../assets/img/Boutique/tshirtcrows.jpg";
import tshirtCrows2 from "../../assets/img/Boutique/vesteCrowsSport.jpg";
import clarkEtLana from "../../assets/img/Boutique/clarkEtLana.jpg";
import clarkKentFtLana from "../../assets/img/Boutique/lanaClark-stickers.jpg";
import clarket from "../../assets/img/Boutique/clark-etStickers.jpg";
import clarkLexPictures from "../../assets/img/Boutique/clarketLex-stickers.jpg";
import ClarkStickers from "../../assets/img/Boutique/ClarkStickers.jpg";
import docteurSmallville from "../../assets/img/Boutique/docteurSmallville.jpg";
import Lanastickers from "../../assets/img/Boutique/Lana-stickers.jpg";
import lanaClarkstickers from "../../assets/img/Boutique/lanaClark-stickers.jpg";
import lanaportraitstickers from "../../assets/img/Boutique/lanaportrait-stickers.jpg";
import LanaTshirtstickers from "../../assets/img/Boutique/LanaTshirt-stickers.jpg";
import lit from "../../assets/img/Boutique/lit.jpg";
import lois from "../../assets/img/Boutique/Lois-stickers.jpg";
import magazinesmallville from "../../assets/img/Boutique/magazine-smallville-stickers.jpg";
import logoS from "../../assets/img/Boutique/S-stickers.jpg";
import smallvilleSerie from "../../assets/img/Boutique/smallville-stickers.jpg";
import villeKansas from "../../assets/img/Boutique/villesmallvillekansas.jpg";
import "./Boutique.css";
import Cart from "../Cart/Cart";

const articlesList = [
  {
    id: 1,
    nom: "Ferme Kent Mug classique",
    prix: 15,
    imageUrl: clarki,
  },
  {
    id: 2,
    nom: "Smallville Poster",
    prix: 30,
    imageUrl: tasse,
  },
  {
    id: 3,
    nom: "Signe de smallville Sticker",
    prix: 40,
    imageUrl: telephone,
  },
  {
    id: 4,
    nom: "Lois et Clark Smallville Sticker",
    prix: 45,
    imageUrl: tshirt2,
  },
  {
    id: 5,
    nom: "Ferme Kent Mug classique",
    prix: 15,
    imageUrl: tshirtSmallville,
  },
  {
    id: 6,
    nom: "LOGO SMALLVILLE Mug à café",
    prix: 18,
    imageUrl: tshirt3,
  },
  {
    id: 7,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt4,
  },
  {
    id: 8,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt5,
  },
  {
    id: 9,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt5,
  },
  {
    id: 10,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt7,
  },
  {
    id: 11,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt10,
  },
  {
    id: 12,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirtcrows,
  },
  {
    id: 13,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: smallvilleSerie,
  },
  {
    id: 14,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt4,
  },
  {
    id: 15,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt5,
  },
  {
    id: 16,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt5,
  },
  {
    id: 17,
    nom: "Clark et Lana, Smallville Sticker",
    prix: 15,
    imageUrl: clarkEtLana,
  },
  {
    id: 18,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt5,
  },
  {
    id: 19,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt5,
  },
  {
    id: 20,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt5,
  },
  {
    id: 21,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: clarkKentFtLana,
  },
  {
    id: 22,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: clarkLexPictures,
  },
  {
    id: 23,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: ClarkStickers,
  },
  {
    id: 24,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: docteurSmallville,
  },
  {
    id: 25,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: Lanastickers,
  },
  {
    id: 26,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: lanaClarkstickers,
  },
  {
    id: 27,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: lanaportraitstickers,
  },
  {
    id: 28,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: LanaTshirtstickers,
  },
  {
    id: 29,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: lit,
  },
  {
    id: 30,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: lois,
  },
  {
    id: 31,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: magazinesmallville,
  },
  {
    id: 32,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: logoS,
  },
  {
    id: 33,
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: smallvilleSerie,
  },
];

export default function Boutique() {
  // Déclare un état pour stocker le texte de filtre
  const [filtrer, setFiltrer] = useState("");
  const [articles, setArticles] = useState([]); // Commence avec un tableau vide
  const [loading, setLoading] = useState(false);
  const [panier, setPanier] = useState([]);

  useEffect(() => {
    setLoading(true); // Indiquer que le chargement commence
    setTimeout(() => {
      setArticles(articlesList); // Mettre à jour l'état des articles
      setLoading(false); // Indiquer que le chargement est terminé
    }, 1000); // Utilise 2000 millisecondes pour simuler le délai de chargement
  }, []);

  // Fonction de gestion des entrées de l'utilisateur dans le champ de recherche
  function handleInput(e) {
    // Récupère la valeur de l'entrée et la nettoie
    const filtrer = e.target.value;
    // Met à jour l'état avec le texte de filtre nettoyé et converti en minuscules
    setFiltrer(filtrer.trim().toLowerCase());
  }

  function handleClickPanier(article) {
    // Passe une fonction à setPanier
    setPanier((prevPanier) => {
      // Crée une nouvelle version du panier avec l'article ajouté
      return [...prevPanier, article];
    });
  }

  return (
    <>
      {loading ? (
        <div className="spinerLogo">
          <i className="fa-solid fa-spinner"></i>
        </div>
      ) : (
        <div className="boutique-container">
          <h1>Boutique</h1>

          <div className="barreDeRecherche">
            <i className="fa-solid fa-magnifying-glass mr-15"></i>
            <input
              onInput={handleInput}
              className="inputBoutique"
              type="text"
              placeholder="Rechercher"
            />
          </div>

          <div className="panier ">
            <i className="fa-solid fa-bucket"></i>
          </div>

          <div className="cartes">
            {articles
              .filter((article) =>
                article.nom.toLowerCase().startsWith(filtrer)
              )
              .map((article) => (
                <div key={article.id} className="carte">
                  <img src={article.imageUrl} alt={article.nom} />
                  <div className="info">
                    <div className="nom">{article.nom}</div>
                    <div className="price">
                      <div className="prix">{article.prix} €</div>

                      <i
                        onClick={handleClickPanier}
                        className="fas fa-shopping-cart"
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* <Cart panier={panier} /> */}
        </div>
      )}
    </>
  );
}
