import React, { useState, useEffect } from "react";
import "../Style/card.scss";

export default function AllMovies() {
  useEffect(() => {
    fetchMovies();
  }, []);

  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const data = await fetch("http://localhost:3000/movies");
    const movies = await data.json();
    setMovies(movies);
    console.log(movies);
  };
  return (
    <div className='container'>
      <div className='card-list'>
        {movies.map((movie) => (
          <div className='card' key={movie._id}>
            <img
              className='card--image'
              alt=''
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.movie_poster}`}
            />
            <div className='card--content'>
              <h3 className='card--title'>{movie.title}</h3>
              <p>
                <small>Release Date: {movie.release_date.slice(0, 10)}</small>
              </p>
              <p>
                <small>Rating: {movie.vote_average}</small>
              </p>
              <p className='card--desc'>{movie.tagline}</p>
              <p className='card--desc'>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
