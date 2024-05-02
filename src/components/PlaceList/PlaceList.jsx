import React from "react";
import smallville from "../../assets/img/lieux/smallville city.jpg";

// placesData.js

const placesData = [
  {
    name: "Lycée de Smallville",
    description: `Le lycée de Smallville est un établissement scolaire important dans la série. C'est là que les personnages principaux, tels que Clark Kent, Lana Lang et Chloe Sullivan, ont suivi leurs études secondaires. Le lycée est le lieu de nombreuses scènes clés de la série, où les jeunes protagonistes font face à des défis personnels et découvrent souvent de nouveaux aspects de leurs pouvoirs et de leur destin.`,
    imageUrl: "url_de_l_image_lycee",
  },
  {
    name: "Ferme Kent",
    description: `La ferme Kent est le foyer de Clark Kent, où il a été élevé par ses parents adoptifs, Jonathan et Martha Kent. C'est un endroit tranquille et isolé à la périphérie de Smallville, où Clark a appris à maîtriser ses pouvoirs extraordinaires tout en développant des valeurs morales solides. La ferme Kent représente un refuge sûr pour Clark et joue un rôle central dans son développement en tant que super-héros.`,
    imageUrl: "url_de_l_image_ferme",
  },
  {
    name: "Smallville",
    description: `Smallville est la petite ville rurale où se déroulent la plupart des événements de la série. C'est un endroit emblématique chargé de mystères, avec ses habitants et ses lieux empreints de secrets et de légendes. Smallville est le cadre idéal pour les aventures de Clark Kent et la découverte de son héritage extraterrestre.`,
    imageUrl: "url_de_l_image_smallville",
  },
  {
    name: "Daily Planet",
    description: `Le Daily Planet est le principal journal de Metropolis où travaille Lois Lane en tant que journaliste d'investigation. C'est un symbole d'intégrité journalistique et de lutte contre le crime et la corruption à Metropolis. Le bâtiment du Daily Planet est souvent le théâtre d'événements cruciaux de l'univers de Superman.`,
    imageUrl: "url_de_l_image_daily_planet",
  },
  {
    name: "Metropolis",
    description: `Metropolis est la grande métropole urbaine où se déroulent de nombreuses aventures de Superman. C'est une ville moderne, vibrante et dynamique, mais aussi le théâtre de nombreux défis et dangers. Metropolis abrite de nombreux personnages emblématiques de l'univers DC Comics.`,
    imageUrl: "url_de_l_image_metropolis",
  },
  {
    name: "LuthorCorp",
    description: `LuthorCorp est une puissante entreprise multinationale fondée par Lex Luthor à Metropolis. C'est un conglomérat aux activités diverses, allant des technologies de pointe à la recherche scientifique. LuthorCorp représente le pouvoir économique et la machination stratégique de Lex Luthor dans le monde des affaires et au-delà.`,
    imageUrl: "url_de_l_image_luthorcorp",
  },
];

export default function PlaceList() {
  return (
    <>
      <img src={smallville} alt="ville" />
    </>
  );
}
