import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/">Home</Link> |{" "}
                <Link to="/allmovies">All Movies</Link> |{" "}
                <Link to="/addmovie">Add a Movie</Link>
                <nav>

                 <ul>
                    <li>
                        <a href="#library">Library</a>
                    </li>
                    <li>
                        <a href="#recently added">Recently Added</a>
                    </li>
                    <li>
                        <a href="#watch list">Watch List</a>
                    </li>
                    <li>
                        <a href="#search">Search</a>
                    </li>
                </ul> 
                </nav>
            </div>
        );
    }
}
