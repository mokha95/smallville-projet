import React from "react";
import styles from "./Films.module.css";
import film1 from "../../assets/img/films/man_of_steel.webp"; // Importation des images
import film2 from "../../assets/img/films/superman_batman_ennemis_publics.jpg";
import film3 from "../../assets/img/films/batman_v_superman_l_aube_de_la_justice.jpg";
import film4 from "../../assets/img/films/superman_returns.jpg";
import film5 from "../../assets/img/films/superman_ii.jpg";
import film6 from "../../assets/img/films/superman_iii.jpg";
import film7 from "../../assets/img/films/zack_snyder_s_justice_league.webp";
import superman1978 from "../../assets/img/films/superman.jpg";
import film9 from "../../assets/img/films/justice_league.jpg";
import film10 from "../../assets/img/films/superman_ii_the_richard_donner_cut.webp";
import film11 from "../../assets/img/films/superman_iv_le_face_a_face.webp";
import film12 from "../../assets/img/films/superman_le_crepuscule_d_un_dieu.webp";
import film13 from "../../assets/img/films/superman_batman_apocalypse.jpg";
import film14 from "../../assets/img/films/superman_batman_ennemis_publics.jpg";
import { Link } from "react-router-dom"; // Importation de Link pour la navigation

function Films() {
  // Liste des films avec leurs informations
  const filmsListe = [
    {
      id: 1,
      imageUrl: film1,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 2,
      imageUrl: film2,
      titre: "2. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 3,
      imageUrl: film3,
      titre: "3. Batman v Superman : L'Aube de la Justice (2016)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 4,
      imageUrl: film4,
      titre: "4. Superman Returns (2006)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 5,
      imageUrl: film5,
      titre: "5. Superman II (1980)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 6,
      imageUrl: film6,
      titre: "6. Superman III (1983)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 7,
      imageUrl: film7,
      titre: "7. Zack Snyder's Justice League (2021)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 8,
      imageUrl: superman1978,
      titre: "8. Superman (1978)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 9,
      imageUrl: film9,
      titre: "9. Justice League (2017)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 10,
      imageUrl: film10,
      titre: `10. Superman IV - Le Face à face (1987)`,
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 11,
      imageUrl: film11,
      titre: `11. Superman : Le Crépuscule d'un dieu (2007)`,
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 12,
      imageUrl: film12,
      titre: `12. Superman / Batman : Apocalypse (2010)`,
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 13,
      imageUrl: film13,
      titre: "13. Superman / Batman : Apocalypse (2010)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 14,
      imageUrl: film14,
      titre: "14. Superman / Batman : Ennemis publics (2010)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
  ];

  return (
    <>
      <div className={styles.filmsBloc}></div>{" "}
      {/* Bloc vide pour la mise en forme */}
      <div className="mt-4">
        {" "}
        {/* Espacement supérieur */}
        <h1 className={styles.titrePage}>Top des meilleurs films Superman</h1>
        <div className="d-flex justify-content-center">
          <p>
            Quel sont les meilleurs films réalisés sur le personnage de Superman
          </p>
        </div>
        <hr className={styles.trait1} />{" "}
        {/* Trait horizontal pour la séparation */}
        {/* Affichage des cartes de films */}
        <div className={styles.supermanCard}>
          {/* Boucle sur chaque film pour afficher une carte */}
          {filmsListe.map((filmsListes) => (
            <div
              className={`m-2 d-flex align-items-center justify-content-center ${styles.blocImgFilms}`}
              key={filmsListes.id} // Clé unique pour chaque élément de la liste
            >
              <img
                className={`img-fluid ${styles.imgCard}`}
                src={filmsListes.imageUrl} // Image du film
                alt={filmsListes.titre} // Texte alternatif pour l'image
              />
              {/* Lien vers la page de détails du film */}
              <Link to={`/films/${filmsListes.id}`}>
                <h5 className="mt-4">{filmsListes.titre}</h5>{" "}
                {/* Titre du film */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Films;
