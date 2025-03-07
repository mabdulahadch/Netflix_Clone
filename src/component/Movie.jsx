import React from "react";
import MovieCard from "./MovieCard";
import "../style/MovieCard.css";
import images1 from "../../assets/ter1.jpg";
import images2 from "../../assets/rambo.jpg";
import images3 from "../../assets/mi.jpg";
import images4 from "../../assets/dieHard.jpg";
import images5 from "../../assets/inception.jpg";
import images6 from "../../assets/borne.jpg";
import images7 from "../../assets/predest.jpg";
import images8 from "../../assets/shutter.jpg";
import images9 from "../../assets/harry.jpg";
import images10 from "../../assets/dark.jpg";

function Movie() {
  const movieImages = [
    images1,
    images2,
    images3,
    images4,
    images5,
    images6,
    images7,
    images8,
    images9,
    images10,
  ];

  let im = images1;

  let movieList = [
    "Terminator",
    "Rambo",
    "Mission Impossible",
    "Die Hard",
    "Inception",
    "Bourne Legacy",
    "Predestination",
    "Shutter Island",
    "Harry Porter",
    "Dark Knight",
  ];
  let movieRating = [5, 4, 3, 2, 1, 5, 4, 3, 2, 1];
  let movieYear = [1984, 1982, 1976, 1988, 1987, 1987, 1985, 1991, 2001, 1977];
  let movieGenre = [
    "Action",
    "Action",
    "Drama",
    "Action",
    "Action",
    "Action",
    "Action",
    "Action",
    "Fantasy",
    "Sci-Fi",
  ];

  return (
    <div className="movie-container">
      {movieList.map((movie, index) => (
        <MovieCard
          key={index}
          movieImage={movieImages[index]}
          movieList={movie}
          movieRating={movieRating[index]}
          movieYear={movieYear[index]}
          movieGenre={movieGenre[index]}
        />
      ))}
    </div>
  );
}

export default Movie;
