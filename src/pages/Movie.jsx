import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../Movie.css";
import MovieHeader from "../MovieHeader";

function Movie() {
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState([]);
  const params = useParams();
  const apiKey = "69cae2f888f4adf3360e460eb4dbf272";
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US`;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        method: "GET",
        url: url,
      });
      setMovie(data);
      setGenre(data.genres);
      console.log(data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MovieHeader />

      {movie ? (
        <div className="container mt-5">
          <div className="d-flex">
            <div>
              <motion.div
                whileHover={{ scale: 1.005 }}
                style={{
                  cursor: "default",
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                  className="imagen"
                />
              </motion.div>
            </div>
            <div className="ms-5">
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  cursor: "default",
                }}
              >
                <h1 className="text-center shadow">{movie.title}</h1>
              </motion.div>
              <div className="d-flex justify-content-evenly mt-4">
                {genre.length > 0
                  ? genre.map((x) => (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        style={{
                          cursor: "default",
                        }}
                      >
                        <p>{x.name}</p>
                      </motion.div>
                    ))
                  : ""}
              </div>
              <motion.div
                whileHover={{ scale: 1.005 }}
                style={{
                  cursor: "default",
                }}
              >
                <p className="mt-5">{movie.overview}</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.005 }}
                style={{
                  cursor: "default",
                }}
              >
                <p>Release date: {movie.release_date}</p>
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
}

export default Movie;
