import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie: { title, posterUrl, description, rate } }) => {
  return (
    <div className="col-md-4 mt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={posterUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{"".padStart(rate, "❇")}</Card.Text>
          <Link to={`/Description/${title}`}><Button variant="secondary">Description</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
