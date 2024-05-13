import saison1 from "../../assets/img/SaisonsSmallville/saison1.webp";
import saison2 from "../../assets/img/SaisonsSmallville/saison2.webp";
import saison3 from "../../assets/img/SaisonsSmallville/saison3.webp";
import saison4 from "../../assets/img/SaisonsSmallville/saison4.webp";
import saison5 from "../../assets/img/SaisonsSmallville/saison5.jpg";
import saison6 from "../../assets/img/SaisonsSmallville/saison6.webp";
import saison7 from "../../assets/img/SaisonsSmallville/saison7.webp";
import saison8 from "../../assets/img/SaisonsSmallville/saison8.webp";
import saison9 from "../../assets/img/SaisonsSmallville/saison9.webp";
import saison10 from "../../assets/img/SaisonsSmallville/saison10.webp";
import "./AllSeasons.css"; // Ajout du fichier CSS pour les styles personnalisés

const saisonSmallville = [
  {
    saisonId: 1,
    saisonNom: 1,
    imageUrl: saison1,
  },
  {
    saisonId: 2,
    saisonNom: 2,
    imageUrl: saison2,
  },
  {
    saisonId: 3,
    saisonNom: 3,
    imageUrl: saison3,
  },
  {
    saisonId: 4,
    saisonNom: 4,
    imageUrl: saison4,
  },
  {
    saisonId: 5,
    saisonNom: 5,
    imageUrl: saison5,
  },
  {
    saisonId: 6,
    saisonNom: 6,
    imageUrl: saison6,
  },
  {
    saisonId: 7,
    saisonNom: 7,
    imageUrl: saison7,
  },
  {
    saisonId: 8,
    saisonNom: 8,
    imageUrl: saison8,
  },
  {
    saisonId: 9,
    saisonNom: 9,
    imageUrl: saison9,
  },
  {
    saisonId: 10,
    saisonNom: 10,
    imageUrl: saison10,
  },
];
function AllSeasons() {
  return (
    <>
      <h2 className="mt-5 persoTitre">Saisons </h2>
      <div className="personnages mt-5 pb-5">
        {saisonSmallville.map((saisons) => (
          <div key={saisons.saisonId} className="personnage">
            <div className="persoCard">
              <img src={saisons.imageUrl} alt={saisons.saisonNom}></img>
              <p>
                {" "}
                <button className="btnNom"> </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllSeasons;
