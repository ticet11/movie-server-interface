import React, { Component } from "react";

export default class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {},
        };
    }

    componentDidMount = () => {
        this.getMovie();
    };

    getMovie = () => {
        axios
            .get(
                `http://localhost:3000/movies/5ecbfbf37e6f4d3988351801`
            )
            .then((response) => {
                this.setState({
                    movies: response.data,
                });
                console.log(response);
            })
            .then()
            .catch((error) => {
                console.error("getmovies error", error);
            });
    };

    render() {
        return <div></div>;
    }
}
