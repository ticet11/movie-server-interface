import React, { useState, useEffect } from 'react';
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Image,
  Slide,
  Slider,
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

export default Carousel = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    // get the movies via axios or fetch
    // then => setMovies(response)
  }

  const renderMovies = () => {
    movies.map((movie, idx) => {
      <Slide index={idx}>
        <Image src={`https://www.puturlhere.com/${movie.movie_poster}`} />
      </Slide>
    })
  }
  return (
    <CarouselProvider
      visibleSlides={5}
      totalSlides={movies.length}
      naturalSlideWidth={250}
      naturalSlideHeight={350}
    >

      <Slider>
        {renderMovies()}
      </Slider>
      <ButtonFirst>First</ButtonFirst>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      <ButtonLast>Last</ButtonLast>
      <DotGroup dotNumbers />
    </CarouselProvider>
  );
}
