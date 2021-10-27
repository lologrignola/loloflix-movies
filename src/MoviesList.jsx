import React from "react";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function MoviesList({ title, rating, page, setPage }) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const apiKey = "69cae2f888f4adf3360e460eb4dbf272";
    const url = title
      ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&sort_by=popularity.desc&query=${title}&vote_average.gte=${rating}&page=${page}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&vote_average.gte=${rating}&page=${page}`;

    const fetchData = async () => {
      const response = await axios({
        method: "GET",
        url: url,
      });
      if (page > 1) {
        setFilteredMovies([...filteredMovies, ...response.data.results]);
      } else {
        setFilteredMovies(response.data.results);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, page, rating]);
  return (
    <InfiniteScroll
      dataLength={filteredMovies.length}
      next={() => setPage((prev) => prev + 1)}
      hasMore={true}
    >
      <div className="container">
        <div className="row mt-3">
          {filteredMovies.length > 0
            ? filteredMovies.map((movie) => (
                <div className="col-2 mb-3">
                  <Movie className="" movie={movie} key={movie.id} />
                </div>
              ))
            : " "}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default MoviesList;
