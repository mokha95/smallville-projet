import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/img/slider/superman1.webp";
import image2 from "../../assets/img/slider/supermanFurieux.webp";
import image3 from "../../assets/img/slider/supermanVol.jpg";
import imageSmallville from "../../assets/img/lieux/smallville city.jpg";
import chloe from "../../assets/img/PersonnageProfil/Chlo%3F_Sullivan.webp";
import kent from "../../assets/img/PersonnageProfil/Clark_Kent.webp";
import clark from "../../assets/img/PersonnageProfil/Chlo%3F_Sullivan.webp";
import davis from "../../assets/img/PersonnageProfil/Davis_Bloome.webp";
import jasonTeague from "../../assets/img/PersonnageProfil/Jason_Teague.webp";
import jimmyOlsen from "../../assets/img/PersonnageProfil/Jimmy_Olsen.webp";
import jonathanKent from "../../assets/img/PersonnageProfil/Jonathan_Kent.webp";
import Lana from "../../assets/img/PersonnageProfil/Lana_Lang.webp";
import Lex from "../../assets/img/PersonnageProfil/Lex_Luthor.webp";
import Lionel from "../../assets/img/PersonnageProfil/Lionel_Luthor.webp";
import Lois from "../../assets/img/PersonnageProfil/Lois_Lane.webp";
import Martha from "../../assets/img/PersonnageProfil/Martha_Kent.webp";
import Oliver from "../../assets/img/PersonnageProfil/Oliver_Queen.webp";
import PeteRoss from "../../assets/img/PersonnageProfil/Pete_Ross.webp";
import Tess from "../../assets/img/PersonnageProfil/Tess_Mercer.webp";
import whitney from "../../assets/img/PersonnageProfil/Whitney_Fordman.webp";
import Zod from "../../assets/img/PersonnageProfil/Zod.webp";
// import styles from "./Accueil.css";
import "./Accueil.css"; // Ajout du fichier CSS pour les styles personnalisés

const persoSmallville = [
  {
    id: 1,
    prenom: "clark kent",
    imageUrl: kent,
  },
  {
    id: 2,
    prenom: "davis",
    imageUrl: davis,
  },
  {
    id: 3,
    prenom: "jason Teague",
    imageUrl: jasonTeague,
  },
  {
    id: 4,
    prenom: "jimmy Olsen",
    imageUrl: jimmyOlsen,
  },
  {
    id: 5,
    prenom: "chloe",
    imageUrl: chloe,
  },
  {
    id: 6,
    prenom: "Lana",
    imageUrl: Lana,
  },
  {
    id: 7,
    prenom: "Lex",
    imageUrl: Lex,
  },
  {
    id: 8,
    prenom: "jonathan kent",
    imageUrl: jonathanKent,
  },
  {
    id: 9,
    prenom: "Lionel Luthor",
    imageUrl: Lionel,
  },
  {
    id: 10,
    prenom: "Lois Lane",
    imageUrl: Lois,
  },
  {
    id: 11,
    prenom: "Martha",
    imageUrl: Martha,
  },
  {
    id: 12,
    prenom: "Oliver queen",
    imageUrl: Oliver,
  },
  {
    id: 13,
    prenom: "Pete Ross",
    imageUrl: PeteRoss,
  },
  {
    id: 14,
    prenom: "Tess",
    imageUrl: Tess,
  },
  {
    id: 15,
    prenom: "whitney",
    imageUrl: whitney,
  },
  {
    id: 16,
    prenom: "Zod",
    imageUrl: Zod,
  },
];

function Accueil() {
  return (
    <>
      <div className="AccueilBloc">
        <p className="AccueilSmallville">Accueil</p>

        <Link className="Liens1">
          Bienvenue A Smallville , capitale des Meteorites !
        </Link>
        <div className="border1">
          <p className="textSmallville pt-3 pb-5 ">
            Après qu&apos; une pluie de météorites se soit abattue sur
            Smallville, une petite bourgade du Kansas, un couple
            d&apos;agriculteur, Jonathan et Martha Kent adoptent un enfant et
            l&apos;élève comme leur propre fils. Douze ans plus tard, Clark
            Kent, devenu un jeune homme, fait la connaissance de Lex Luthor, un
            jeune milliardaire qui vient d&apos;emménager en ville, puis
            découvre ses véritables origines qui feront de lui un
            être...extraordinaire.
          </p>
        </div>
        <Carousel className="mt-5">
          {/*image 1  */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={imageSmallville}
              alt="Superman furieux"
            />
            {/* <Carousel.Caption>
              <h3>Superman furieux</h3>
              <p>Legende pour la deuxième diapositive...</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          {/* image 2 */}
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={image2}
              alt="Superman furieux"
            />
            {/* <Carousel.Caption>
              <h3>Superman furieux</h3>
              <p>Legende pour la deuxième diapositive...</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={image3}
              alt="Superman en vol"
            />
            {/* <Carousel.Caption>
              <h3>Superman en vol</h3>
              <p>Legende pour la troisième diapositive...</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>

        <h2 className="mt-5 persoTitre">PERSONNAGES</h2>
        <div className="personnages mt-5">
          {persoSmallville.map((perso) => (
            <div key={perso.id} className="personnage">
              <img className="m-1" src={perso.imageUrl} alt={perso.prenom} />
              <p>{perso.prenom}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accueil;
