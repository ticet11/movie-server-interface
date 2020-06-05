import React from "react";
import axios from "axios";
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
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

export default class Carousel extends React.Component {
    constructor() {
        super();

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

    genreMovieSlides = (genre) =>
        this.state.movies
            .filter((movie) => movie.genre[0].name === genre)
            .map((movie) => {
                console.log(movie.movie_poster);
                return (
                    <Slide key={movie._id} index={movie._id}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.movie_poster}`}
                        />
                    </Slide>
                );
            });

    allMovieSlides = () =>
        this.state.movies.map((movie) => {
            return (
                <Slide key={movie._id} index={movie._id}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.movie_poster}`}
                    />
                </Slide>
            );
        });

    render() {
        return (
            <CarouselProvider
                visibleSlides={5}
                totalSlides={this.state.movies.length}
                naturalSlideWidth={250}
                naturalSlideHeight={350}
            >
                <Slider>{this.genreMovieSlides('Action')}</Slider>
                <ButtonFirst>First</ButtonFirst>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                <ButtonLast>Last</ButtonLast>
                <DotGroup dotNumbers />
            </CarouselProvider>
        );
    }
}
