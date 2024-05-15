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
    saisonNom: "Saison 1",
    imageUrl: saison1,
  },
  {
    saisonId: 2,
    saisonNom: "Saison 2",
    imageUrl: saison2,
  },
  {
    saisonId: 3,
    saisonNom: "Saison 3",
    imageUrl: saison3,
  },
  {
    saisonId: 4,
    saisonNom: "Saison 4",
    imageUrl: saison4,
  },
  {
    saisonId: 5,
    saisonNom: "Saison 5",
    imageUrl: saison5,
  },
  {
    saisonId: 6,
    saisonNom: "Saison6",
    imageUrl: saison6,
  },
  {
    saisonId: 7,
    saisonNom: "Saison 7",
    imageUrl: saison7,
  },
  {
    saisonId: 8,
    saisonNom: "Saison 8",
    imageUrl: saison8,
  },
  {
    saisonId: 9,
    saisonNom: "Saison 9",
    imageUrl: saison9,
  },
  {
    saisonId: 10,
    saisonNom: "Saison 10",
    imageUrl: saison10,
  },
];
function AllSeasons() {
  return (
    <>
      <h2 className="mt-5 persoTitre">Saisons </h2>
      <div className="personnagesSamallville mt-5 pb-5">
        {saisonSmallville.map((saisons) => (
          <div key={saisons.saisonId} className="personnage">
            <div className="persoCard">
              <img src={saisons.imageUrl} alt={saisons.saisonNom}></img>
              <p>
                {" "}
                <button className="btnNom">{saisons.saisonNom} </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllSeasons;
