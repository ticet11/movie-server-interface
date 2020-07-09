import React from "react";

import "../../Style/card.scss";

export default function MovieCard({ movie }) {
  const addMovie = async (e) => {
    const location = prompt('Where is this movie?', '../assets/video/train.mp4')

    e.preventDefault();
    console.log("submitting");

    const TMDBurl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=682ff2fe2db75f083462d4622d51c448&language=en-US`;
    const localUrl = "http://localhost:3000/movies";

    try {
      const res = await fetch(TMDBurl);
      const data = await res.json();

      const poster = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: data.id,
          genre: data.genres,
          location: location,
          movie_poster: data.poster_path,
          overview: data.overview,
          release_date: data.release_date,
          runtime: data.runtime,
          tagline: data.tagline,
          title: data.title,
          vote_average: data.vote_average,
          overview: data.overview,
        }),
      };
      fetch(localUrl, poster)
        .then((response) => response.json())
        .then((response) => console.log(response));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='card'>
      <div className='dbButton'>
        <button
          onClick={addMovie}
          className='dbbtn'
          // id={movie.id}
          type='submit'>
          Add Movie
        </button>
      </div>
      <img
        className='card--image'
        alt=''
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
      />
      <div className='card--content'>
        <h3 className='card--title'>{movie.title}</h3>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>Rating: {movie.vote_average}</small>
        </p>
        <p className='card--desc'>{movie.overview}</p>
      </div>
    </div>
  );
}
