import React from "react";
import styles from "./Films.module.css";
import film1 from "../../assets/img/fims/man_of_steel.webp";
import film2 from "../../assets/img/fims/superman_batman_ennemis_publics.jpg";
import film3 from "../../assets/img/fims/batman_v_superman_l_aube_de_la_justice.jpg";
import film4 from "../../assets/img/fims/superman_returns.jpg";
import film5 from "../../assets/img/fims/superman_ii.jpg";
import film6 from "../../assets/img/fims/superman_iii.jpg";
import film7 from "../../assets/img/fims/zack_snyder_s_justice_league.webp";
import film9 from "../../assets/img/fims/justice_league.jpg";
import film10 from "../../assets/img/fims/superman_ii_the_richard_donner_cut.webp";
import film11 from "../../assets/img/fims/superman_iv_le_face_a_face.webp";
import film12 from "../../assets/img/fims/superman_le_crepuscule_d_un_dieu.webp";
import film13 from "../../assets/img/fims/superman_batman_apocalypse.jpg";
import film14 from "../../assets/img/fims/superman_batman_ennemis_publics.jpg";

function Films() {
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
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 3,
      imageUrl: film3,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 4,
      imageUrl: film4,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 5,
      imageUrl: film5,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 6,
      imageUrl: film6,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 7,
      imageUrl: film7,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    //   {
    //     id: 8,
    //     imageUrl:film8,
    //     titre: "1. Man of Steel (2013)",
    //     paragraphe: "<p> Film de Zack Snyder </p>",
    //   },
    {
      id: 9,
      imageUrl: film9,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 10,
      imageUrl: film10,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 11,
      imageUrl: film11,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 12,
      imageUrl: film12,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 13,
      imageUrl: film13,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
    {
      id: 14,
      imageUrl: film14,
      titre: "1. Man of Steel (2013)",
      paragraphe: "<p> Film de Zack Snyder </p>",
    },
  ];
  return (
    <>
      <div className={styles.filmsBloc}> </div>

      <div className="mt-4">
        <h1 className={styles.titrePage}>Top des meilleurs films Superman</h1>
        <div className="d-flex justify-content-center">
          <p>
            Quel sont les meilleurs films réalisés sur le personnage de Superman
          </p>
        </div>
        <hr className={styles.trait1} />

        <div className={styles.supermanCard}>
          {filmsListe.map((filmsListes) => (
            <div
              className="m-2 d-flex align-items-center justify-content-center"
              key={filmsListes.id}
              // style={{ width: "150px", height: "200px" }}
            >
              <img
                className={`img-fluid  ${styles.imgCard}`}
                src={filmsListes.imageUrl}
                alt=""
                // style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <h5 className="mt-4">{filmsListes.titre}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Films;
