// import CharacterCard from "./CharacterCard";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./Personnages.css";
// Tableau d'objets représentant les personnages principaux avec leurs informations
import clarki from "../../assets/img/personages/clark.webp";
import Lana from "../../assets/img/personages/Kristin-Kreuk-in-Smallville.webp";
import Lex from "../../assets/img/personages/Lex-Luthor-Smallville-Arrow-Crisis-on-Infinite-Earths.webp";
import LionnelLuthor from "../../assets/img/personages/lionnel luthor smallville.avif";
import Chloe from "../../assets/img/personages/clhoe2.jpg";
import Lois from "../../assets/img/personages/lois2.jpg";
import Pete from "../../assets/img/personages/Pete_Ross_-_Sam_Jones.webp";
import OliverQueen from "../../assets/img/personages/oliver queen.webp";
import Martha from "../../assets/img/personages/martha kent.jpg";
import JonathanKent from "../../assets/img/personages/jonathan kent.jpg";

const charactersData = [
  {
    id: 1,
    name: "Clark Kent",
    role: "Protagoniste",
    biography:
      "Clark Kent est le personnage principal de la série Smallville. Il est né sur la planète Krypton et a été envoyé sur Terre par ses parents biologiques peu avant la destruction de leur planète. Il a été adopté par Jonathan et Martha Kent, qui l'ont élevé dans la petite ville de Smallville, au Kansas. Clark possède des pouvoirs surhumains tels que la super-force, la super-vitesse, la vision thermique et la capacité de voler. Il lutte pour trouver son identité tout en cachant ses pouvoirs au monde extérieur.",
    motivations:
      "Les motivations de Clark sont ancrées dans sa quête pour comprendre son passé, ses origines et sa place sur Terre. Il aspire à utiliser ses pouvoirs pour protéger les gens et faire le bien, tout en luttant pour maintenir des relations personnelles normales malgré sa nature extraordinaire.",
    evolution:
      "Au fil de la série, Clark évolue d'un jeune homme incertain sur ses capacités et son identité à un héros déterminé à protéger les innocents. Il doit surmonter des défis moraux et personnels, accepter sa destinée et faire face aux conséquences de ses choix.",
    imageUrl: clarki, // Utilisation de la variable clarki pour l'URL de l'image
  },
  //   personnage
  {
    id: 2,
    name: " Lana Lang ",
    role: "Intérêt amoureux de Clark Kent",
    biography:
      "Lana Lang est une amie d'enfance de Clark Kent à Smallville. Elle est artistique, compatissante et liée au passé de Clark. Lana découvre tôt les pouvoirs de Clark et entretient une relation amoureuse complexe avec lui tout au long de la série.",
    motivations:
      "Les motivations de Lana sont souvent liées à sa quête de vérité sur le passé, son désir d'aider les autres et sa relation avec Clark. Elle cherche également à découvrir son propre chemin et à surmonter les tragédies qui ont marqué sa vie.",
    evolution:
      "Lana évolue d'une jeune femme curieuse et sentimentale à une personne plus indépendante et déterminée. Elle apprend à prendre des décisions pour elle-même, à faire face aux défis de sa propre vie et à se distancer progressivement de son passé avec Clark.",
    imageUrl: Lana,
  },
  //  personnage
  {
    id: 3,
    name: "  Lex Luthor ",
    role: "Antagoniste principal",
    biography:
      "Lex Luthor est le fils du magnat des affaires Lionel Luthor. Il est intelligent, charismatique et ambitieux. Lex est fasciné par les pouvoirs extraordinaires de Clark Kent et développe une relation ambiguë avec lui. Au fil de la série, Lex évolue vers un antagoniste de plus en plus dangereux pour Clark et Smallville.",
    motivations:
      "Les motivations de Lex sont influencées par son désir de pouvoir, de contrôle et de compréhension des phénomènes surnaturels. Il cherche également à établir son identité et son héritage, souvent au détriment de ses relations personnelles.",
    evolution:
      "Lex évolue d'un personnage ambigu et ambigu à un antagoniste déterminé et impitoyable. Son obsession pour le pouvoir et sa méfiance envers Clark le mènent sur une voie sombre, affectant ses relations et sa perception du monde.",
    imageUrl: Lex,
  },
  //  personnage
  {
    id: 4,
    name: "  Lex Luthor ",
    role: "Antagoniste principal",
    biography:
      "Lex Luthor est le fils du magnat des affaires Lionel Luthor. Il est intelligent, charismatique et ambitieux. Lex est fasciné par les pouvoirs extraordinaires de Clark Kent et développe une relation ambiguë avec lui. Au fil de la série, Lex évolue vers un antagoniste de plus en plus dangereux pour Clark et Smallville.",
    motivations:
      "Les motivations de Lex sont influencées par son désir de pouvoir, de contrôle et de compréhension des phénomènes surnaturels. Il cherche également à établir son identité et son héritage, souvent au détriment de ses relations personnelles.",
    evolution:
      "Lex évolue d'un personnage ambigu et ambigu à un antagoniste déterminé et impitoyable. Son obsession pour le pouvoir et sa méfiance envers Clark le mènent sur une voie sombre, affectant ses relations et sa perception du monde.",
    imageUrl: LionnelLuthor,
  },
  //  personnage
  {
    id: 5,
    name: "Chloé Sullivan",
    role: "Amie proche de Clark, journaliste",
    biography:
      "Chloé Sullivan est une amie proche de Clark Kent à Smallville. Elle est passionnée par le journalisme et est constamment à la recherche de scoops. Chloé joue un rôle important en aidant Clark à découvrir la vérité sur ses origines et à protéger Smallville des menaces.",
    motivations:
      "Chloé est motivée par son désir de vérité, d'intégrité journalistique et de protection de ses amis. Elle est dévouée à la mission de révéler les secrets de Smallville et à soutenir Clark dans ses efforts pour protéger la ville.",
    evolution:
      "Chloé évolue d'une adolescente curieuse à une journaliste intrépide. Ses expériences la conduisent à devenir une alliée précieuse pour Clark et un membre essentiel de l'équipe chargée de protéger Smallville.",
    imageUrl: Chloe,
  },
  //  personnage
  {
    id: 6,
    name: "Jonathan Kent",
    role: "Père adoptif de Clark, fermier",
    biography:
      "Jonathan Kent est le père adoptif de Clark Kent. Avec sa femme Martha, il a élevé Clark à Smallville. Jonathan est un fermier aimant et un modèle de moralité pour Clark, l'aidant à comprendre ses pouvoirs et à prendre des décisions difficiles.",
    motivations:
      "Jonathan est motivé par l'amour pour sa famille et le désir de protéger Clark. Il enseigne à Clark les valeurs de l'honnêteté et du sacrifice, le préparant à devenir un héros responsable.",
    evolution:
      "Jonathan évolue d'un père protecteur à un guide sage pour Clark. Sa relation avec Clark façonne le caractère et les choix moraux de Clark tout au long de la série.",
    imageUrl: JonathanKent,
  },
  //  personnage
  {
    id: 7,
    name: "Martha Kent",
    role: "Mère adoptive de Clark, fermière",
    biography:
      "Martha Kent est la mère adoptive de Clark Kent et l'épouse de Jonathan Kent. Elle a élevé Clark à Smallville avec son mari. Martha est une figure maternelle aimante et encourageante pour Clark, lui enseignant l'importance de ses origines et de ses pouvoirs.",
    motivations:
      "Martha est motivée par l'amour pour sa famille et son engagement envers le bien-être de Clark. Elle est un pilier de soutien pour Clark tout au long de ses défis et épreuves.",
    evolution:
      "Martha évolue d'une mère protectrice et attentionnée à une figure matriarcale forte. Son influence sur Clark contribue à façonner sa moralité et sa confiance en lui.",
    imageUrl: Pete,
  },
  //  personnage
  {
    id: 8,
    name: "Oliver Queen",
    role: "Ami de Clark, philanthrope, justicier (Green Arrow)",
    biography:
      "Oliver Queen est un riche philanthrope et ami de Clark Kent. Il devient également le justicier Green Arrow, protégeant la ville de Star City. Oliver partage une amitié proche avec Clark et devient un allié crucial dans la lutte contre le crime et les menaces surnaturelles.",
    motivations:
      "Les motivations d'Oliver sont guidées par un désir de justice et de rédemption. Il utilise sa richesse et ses compétences pour combattre le crime et protéger les innocents.",
    evolution:
      "Oliver évolue d'un playboy riche à un justicier engagé et respecté. Ses expériences le transforment en un leader influent dans la communauté des héros.",
    imageUrl: OliverQueen,
  },
  //  personnage
  {
    id: 9,
    name: "Pete Ross",
    role: "Ami d'enfance de Clark",
    biography:
      "Pete Ross est un ami d'enfance de Clark Kent à Smallville. Il est le premier à découvrir les pouvoirs de Clark et garde son secret. Au fil du temps, Pete devient un confident et un soutien pour Clark, même s'il est parfois confronté à des choix difficiles.",
    motivations:
      "Les motivations de Pete sont motivées par l'amitié et la loyauté envers Clark. Il traverse des moments de doute et de peur en raison du secret de Clark, mais reste un ami fidèle.",
    evolution:
      "Pete évolue d'un ami curieux et compatissant à un allié mature et réfléchi pour Clark. Son amitié avec Clark est un élément important de l'évolution de Clark.",
    imageUrl: Martha,
  },
  //  personnage
  {
    id: 10,
    name: "Lois Lane",
    role: "Journaliste, future épouse de Clark Kent",
    biography:
      "Lois Lane est une journaliste intrépide travaillant pour le Daily Planet. Elle arrive à Smallville pour enquêter sur la mystérieuse ville et développe une relation tendue avec Clark Kent. Au fil du temps, Lois devient une alliée et une amie proche de Clark, partageant ses secrets et ses aventures.",
    motivations:
      "Les motivations de Lois sont centrées sur son amour pour la vérité, le journalisme d'investigation et sa curiosité insatiable. Elle est déterminée à découvrir la vérité derrière les événements mystérieux de Smallville.",
    evolution:
      "Lois évolue d'une journaliste curieuse à une figure emblématique du journalisme. Son lien avec Clark se transforme en une romance profonde et elle devient un soutien indispensable pour lui.",
    imageUrl: Lois,
  },
];
export default function Personnages() {
  return (
    <>
      <h1>Personnnages principaux</h1>
      {/* Mapping à travers les données des personnages pour afficher les cartes */}
      {charactersData.map((characters) => (
        <CharacterCard key={characters.id} characters={characters} />
      ))}
    </>
  );
}
