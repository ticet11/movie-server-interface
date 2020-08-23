// TODO: figure out how to make the carousel number of slides dynamic with what's returned for genre movies

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import arrowLeft from "../../icons/arrow_left.jpg";
import arrowRight from "../../icons/arrow_right.jpg";

import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Image,
    Slide,
    Slider,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        };
    }

    componentDidMount = () => {
        this.getMovies();
    };

    getMovies = () => {
        axios
            .get("http://localhost:3000/movies")
            .then((response) => {
                this.setState({
                    movies: response.data,
                });
            })
            .then()
            .catch((error) => {
                console.error("getmovies error", error);
            });
    };

    getMovieSlides = () => {
        const genreMovieArray = this.state.movies.filter((movie) => {
            return this.props.genre == null
                ? movie
                : movie.genre.some(
                      (item) => item.name === this.props.genre
                  );
        });
        return genreMovieArray.map((movie) => {
            return (
                <Slide key={movie._id} index={movie._id}>
                    <Link to={`/movie/${movie._id}`}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.movie_poster}`}
                        />
                    </Link>
                </Slide>
            );
        });
    };

    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={250}
                naturalSlideHeight={350}
                step={5}
                totalSlides={this.state.movies.length}
                visibleSlides={5}
            >
                <Slider>{this.getMovieSlides()}</Slider>

                <ButtonBack className="carousel-arrow">
                    <img src={arrowLeft} alt="" />
                </ButtonBack>

                <ButtonNext className="carousel-arrow">
                    <img src={arrowRight} alt="" />
                </ButtonNext>
            </CarouselProvider>
        );
    }
}
