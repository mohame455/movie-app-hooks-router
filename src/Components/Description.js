import React from "react";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

const Description = ({ movieList, match }) => {
  console.log(match);
  return (
    <div>
      {movieList
        .filter((el) => el.title === match.params.title)
        .map((el, index) => (
          <div key={index}>
            <h3>{el.description}</h3>
            <iframe
              width="853"
              height="480"
              src={el.src}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ))}
        <Link to='/'><Button variant="secondary">Back</Button></Link>
    </div>
  );
};

export default Description;
