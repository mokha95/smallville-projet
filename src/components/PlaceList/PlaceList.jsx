import React from "react";
import "./PlaceList.css";
import { Link } from "react-router-dom";
import smallville2 from "../../assets/img/lieux/leTalonSmallville.webp";
import DailyPlanet from "../../assets/img/lieux/Daily-Planet-Smallville.webp";
import HighSchoolSmallville from "../../assets/img/lieux/Smallville_second_high_school (1).webp";
import Metropolis from "../../assets/img/lieux/Metropolis2013.webp";
import LuthorCorp from "../../assets/img/lieux/luthorCorp.webp";
import FermeDesKent from "../../assets/img/lieux/Ferme_des_Kent_.webp";
import PlaceDetail from "../PlaceDetail/PlaceDetail";
import Modal from "../Modal/Modal";

import { useState } from "react";

// placesData.js

const placesData = [
  {
    name: "Smallville",
    description: `Smallville est bien plus qu'une simple petite ville rurale ; c'est un lieu emblématique et central dans la série, imprégné de mystères et de légendes. Au cœur de cette communauté se trouve une richesse de secrets et d'intrigues, chacun lié aux habitants et aux lieux qui façonnent l'histoire de la série. Pour Clark Kent, Smallville représente un terreau fertile où il découvre les vérités sur ses origines extraterrestres et les implications de ses pouvoirs surhumains.

    Chaque coin de la ville renferme des histoires fascinantes : du lycée où Clark a fréquenté ses camarades de classe, aux rues animées du centre-ville, en passant par les vastes étendues de la ferme Kent où il a grandi. Smallville devient ainsi un personnage à part entière, un reflet des luttes et des triomphes de Clark.
    
    La beauté de Smallville réside dans son ambiance rurale et authentique, combinée à une atmosphère imprégnée de secrets et de mystères qui inspirent les aventures et les révélations. Chaque épisode révèle un nouveau chapitre de cette ville mythique, offrant aux téléspectateurs un aperçu captivant de l'univers de Clark Kent et de son héritage extraterrestre.`,
    imageUrl: smallville2,
    id: 1,
  },

  {
    name: "Ferme Kent",
    description: `
    La ferme Kent est bien plus qu'un simple lieu de résidence pour Clark Kent - c'est son sanctuaire, son cocon protecteur où il a été élevé par Jonathan et Martha Kent. Située à la périphérie tranquille de Smallville, cette ferme isolée a été le théâtre de l'enfance et de l'adolescence de Clark. C'est là qu'il a appris à maîtriser ses incroyables pouvoirs tout en développant des valeurs morales solides, façonnées par les enseignements bienveillants de ses parents adoptifs. La ferme Kent symbolise non seulement un lieu de résidence, mais aussi un refuge sûr où Clark a pu grandir et s'épanouir, apprenant à embrasser son identité extraordinaire tout en maintenant les pieds sur terre. Son histoire avec la ferme Kent est au cœur de son développement en tant que super-héros et de son engagement envers le bien.`,
    imageUrl: FermeDesKent,
    id: 2,
  },
  {
    name: "Lycée de Smallville",
    description: `
    Le lycée de Smallville occupe une place centrale dans la série, représentant un lieu essentiel où les personnages principaux ont évolué. Clark Kent, Lana Lang et Chloe Sullivan y ont suivi leurs études secondaires, forgeant des amitiés et des liens qui ont façonné leur parcours. C'est au sein de cet établissement que se déroulent de nombreuses scènes clés, témoignant des défis personnels auxquels les jeunes protagonistes sont confrontés. Le lycée devient ainsi le théâtre où s'expriment leurs découvertes sur leurs pouvoirs et leur destin, offrant un contexte riche en émotions et en rebondissements. Cette atmosphère éducative renforce l'importance narrative du lieu dans la série, enrichissant le récit et contribuant à l'évolution des personnages.`,
    imageUrl: HighSchoolSmallville,
    id: 3,
  },

  {
    name: "Daily Planet",
    description: `
    Le Daily Planet est bien plus qu'un simple journal ; il incarne l'intégrité et l'engagement journalistique dans l'univers de Metropolis. C'est là que Lois Lane, une journaliste d'investigation passionnée, se bat pour révéler la vérité au grand public. Le journal est un bastion de l'éthique journalistique, un phare de la liberté de la presse dans une ville confrontée à de nombreux défis.
    
    Situé au cœur de Metropolis, le bâtiment du Daily Planet est une icône reconnaissable, souvent témoin d'événements cruciaux et de confrontations entre le bien et le mal. Pour Lois Lane et ses collègues, le journal représente un lieu de rassemblement où les histoires les plus importantes prennent vie, offrant une plateforme pour exposer la corruption et l'injustice.
    
    Le Daily Planet devient ainsi un élément essentiel de l'univers de Superman, un lieu où la vérité est recherchée et défendue avec détermination. Son architecture imposante et son histoire captivante en font un pilier de la société médiatique de Metropolis, symbolisant la lutte contre les forces obscures qui menacent la ville et ses habitants.`,
    imageUrl: DailyPlanet,
    id: 4,
  },
  {
    name: "Metropolis",
    description: `Metropolis est bien plus qu'une simple métropole ; c'est le cœur palpitant d'un univers vibrant et dynamique où se déroulent les aventures légendaires de Superman. Cette grande ville moderne regorge de gratte-ciel étincelants, de rues animées et d'une énergie électrique constante qui la distingue des autres grandes métropoles fictives.

    Au-delà de ses attraits architecturaux, Metropolis est le lieu de rencontre de nombreux personnages emblématiques de l'univers DC Comics, de Superman à Lex Luthor en passant par Lois Lane. La ville est un théâtre où se déroulent des défis épiques, des confrontations héroïques et des luttes intenses entre le bien et le mal.
    
    Cependant, derrière sa façade moderne et ses lumières éblouissantes, Metropolis abrite également de sombres secrets et des dangers imprévisibles. C'est un lieu où le courage et la détermination de ses héros sont mis à l'épreuve à chaque tournant.
    
    En somme, Metropolis incarne l'esprit de l'aventure et de la modernité dans l'univers des super-héros. C'est un endroit où l'espoir brille toujours, même au milieu des défis les plus redoutables.`,
    imageUrl: Metropolis,
    id: 5,
  },
  {
    name: "LuthorCorp",
    description: `LuthorCorp est bien plus qu'une simple entreprise ; c'est un empire économique et technologique bâti sur l'ambition dévorante de Lex Luthor. Fondée à Metropolis, LuthorCorp domine le paysage des affaires avec ses activités diversifiées, allant des technologies de pointe à la recherche scientifique de pointe.

    En tant que conglomérat multinational, LuthorCorp incarne le pouvoir financier et la machination stratégique de Lex Luthor. À travers cette entreprise, Lex étend son influence sur la ville de Metropolis et au-delà, cherchant à façonner le monde à sa manière.
    
    LuthorCorp est également un foyer de controverses, de secrets et de manigances. Derrière les façades brillantes de ses tours de verre se cachent des intrigues diaboliques et des expérimentations clandestines qui alimentent les ambitions démesurées de Lex Luthor.
    
    En résumé, LuthorCorp symbolise la fusion entre le pouvoir économique, la technologie de pointe et les ambitions dévorantes d'un homme. C'est un pilier central de l'univers de Superman, où la lutte pour le pouvoir et la vérité se joue sur le champ de bataille des affaires.`,
    imageUrl: LuthorCorp,
    id: 6,
  },
];

export default function PlaceList() {
  const [selectedPlace, setselectedPlace] = useState(null);
  const [open, setIsOpen] = useState(false);

  function handleButtonClick(place) {
    setselectedPlace(place);
    setIsOpen(!open);
    console.log("cliqué");
  }
  return (
    <>
      <div className="center-container">
        <div className="place-list">
          {placesData.map((place, idx) => (
            <React.Fragment key={place.id || place.name}>
              <div className="place-item">
                <h2 className="text-center p-3">{place.name}</h2>
                <img src={place.imageUrl} alt={place.name} />
                <p className="paragrapheDescription">{place.description}</p>
                <div className="btnInfos">
                  <button
                    onClick={() => handleButtonClick(place)}
                    className="btnDetail"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
              {/* Ajout du bloc Clark, Pete et Chloé juste après la première carte Smallville */}
              {idx === 0 && (
                <div className="place-item">
                  <img
                    src={process.env.PUBLIC_URL ? process.env.PUBLIC_URL + "/images/persoSmallville/smallville-photo-tom-welling-allison-mack-1401548.jpg" : "/images/persoSmallville/smallville-photo-tom-welling-allison-mack-1401548.jpg"}
                    alt="Clark Kent, Pete Ross et Chloé Sullivan"
                    style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
                  />
                  <p className="paragrapheDescription">
                    <b>Clark Kent, Pete Ross et Chloé Sullivan</b> incarnent l’amitié et la complicité au cœur de Smallville. Ensemble, ils traversent les épreuves du lycée, partagent des secrets et affrontent les mystères de la ville. Chloé, journaliste passionnée, soutient Clark dans sa quête de vérité, tandis que Pete, fidèle ami, l’accompagne dans ses aventures et protège ses secrets. Leur trio symbolise la force des liens humains face à l’extraordinaire, et rappelle que, même dans une ville pleine de mystères, l’amitié reste le plus grand des pouvoirs.
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        {open &&
          selectedPlace && ( // Affiche le modal si ouvert et que selectedPlace a une valeur
            <Modal
              name={selectedPlace.name}
              description={selectedPlace.description}
              image={selectedPlace.imageUrl}
              isOpen={open}
              onClose={() => setIsOpen(false)} // Méthode pour fermer le modal
            />
          )}
      </div>
    </>
  );
}
