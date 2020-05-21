import React from 'react';

import '../../Style/card.css';

export default function MovieCard({ movie }) {
	return (
		<div className='card'>
			<div className='dbButton'>
				<button className='Button' type='submit'>
					Add Movie to Database
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