import React, { Component } from 'react'

export default class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            movie: {}
        })
    }

    getMovie = () => {
        axios
            .get("http://localhost:3000/movie")
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

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
