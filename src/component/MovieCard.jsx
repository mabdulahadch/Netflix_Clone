import React from "react";
import "../style/MovieCard.css";

function MovieCard(props) {
  return (
    <>
      <div className="movie-card">
        <img src={props.movieImage} alt="movie" />
        <h1>{props.movieList}</h1>
        <p>Rating: {props.movieRating}</p>
        <p>Year: {props.movieYear}</p>
        <p>Genre: {props.movieGenre}</p>
      </div>
    </>
  );
}

export default MovieCard;
