import React from "react";
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
import villeSmallvilleKansas from "../../assets/img/Boutique/villesmallvillekansas.jpg";
import "./Boutique.css";
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
    imageUrl: villeSmallvilleKansas,
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
    nom: "Meilleures séries Smallville T-shirt essentiel",
    prix: 15,
    imageUrl: tshirt5,
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
];

export default function Boutique() {
  return (
    <div className="boutique-container">
      <h1>Boutique</h1>
      <div className="cartes">
        {articlesList.map((article) => (
          <div key={article.id} className="carte">
            <img src={article.imageUrl} alt={article.nom} />
            <div className="info">
              <div className="nom">{article.nom}</div>
              <div className="prix">€{article.prix}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
