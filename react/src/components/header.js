import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/allmovies'>Library</Link>
            </li>
            <li>
              <a href='#recently added'>Recently Added</a>
            </li>
            <li>
              <a href='#watch list'>Watch List</a>
            </li>
            <li>
              <Link to='/addmovie'>Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
