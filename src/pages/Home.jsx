import React from "react";
import Rating from "react-rating";
import { useState } from "react";
import Header from "../Header";
import MoviesList from "../MoviesList";

function Home() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [page, setPage] = useState(1);
  return (
    <div>
      <Header title={title} setTitle={setTitle} setPage={setPage} />
      <div className="text-center my-3">
        Rating filter:
        <Rating
          setPage={setPage}
          className="text-warning"
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          initialRating={rating}
          onChange={(rate) => {
            setRating(rate * 2);
            setPage(1);
          }}
        />
      </div>
      <MoviesList title={title} rating={rating} setPage={setPage} page={page} />
    </div>
  );
}

export default Home;
