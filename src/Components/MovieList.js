import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Form } from "react-bootstrap";
import { starList } from "../assets/Data";

const MovieList = ({ movieList }) => {
  const [tabStar, setTabStar] = useState(starList);

  const changeColor = (id) => {
    setTabStar(
      tabStar.map((el) =>
        el.id === id
          ? { icon: el.icon, isColored: !el.isColored, id: el.id }
          : el
      )
    );
  };

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-around">
        <Form.Control
          onChange={handleSearch}
          className="col-md-7"
          type="text"
          placeholder="enter the movie title"
        />
        <div>
          {tabStar.map((el) => (
            <span
              className={el.isColored ? "gold" : "star"}
              onClick={() => changeColor(el.id)}
              key={el.id}
            >
              {el.icon}
            </span>
          ))}
        </div>
      </div>
      <div className="row">
        {movieList
          .filter((movie) =>
            movie.title.toUpperCase().includes(search.toUpperCase())
          )
          .filter(
            (movie) =>
              movie.rate >= tabStar.filter((el) => el.isColored === true).length
          )
          .map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
