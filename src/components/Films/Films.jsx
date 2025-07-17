import React, { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export default function Films() {
  const [filmsListe, setFilmsListe] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=superman&language=fr-FR`
        );
        const data = await response.json();
        setFilmsListe(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container my-4">
      {/* Barre de recherche dans un formulaire */}
      <form className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher un film Superman..."
          aria-label="Recherche de films"
        />
        <button className="btn btn-primary" type="submit">
          Rechercher
        </button>
      </form>

      {/* Grille des films */}
      <div className="row">
        {filmsListe.map((film) => (
          <div className="col-md-4 mb-4" key={film.id}>
            <div className="card h-100 bg-dark text-light shadow-sm d-flex flex-column">
              {film.poster_path ? (
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                />
              ) : null}

              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center text-info">
                  {film.title}
                </h5>
                <p className="mb-1">
                  <strong className="text-warning">Sortie :</strong>{" "}
                  {film.release_date || "Date inconnue"}
                </p>
                <p className="mb-2">
                  <strong className="text-warning">Note :</strong>{" "}
                  <span className="text-light fw-bold">
                    {film.vote_average} ⭐
                  </span>
                </p>
                <h6 className="text-primary mt-auto">Synopsis</h6>
                <p
                  className="text-light small"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {film.overview || "Aucun synopsis disponible."}
                </p>

                <div>
                  <button className="btn btn-danger btn-sm mt-3 w-75">
                    ❤️ Ajouter au coup de cœur
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
