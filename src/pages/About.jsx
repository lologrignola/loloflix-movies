import React, { useState } from "react";
import Header from "../Header";

function About() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [page, setPage] = useState(1);
  return (
    <>
      <Header title={title} setTitle={setTitle} setPage={setPage} />
      <div className="container">
        <div className="text-center mt-5">
          <h1>About Us</h1>
        </div>
      </div>
    </>
  );
}

export default About;
