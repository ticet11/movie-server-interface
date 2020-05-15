import React, { Component } from 'react';


export default class Header extends Component{ 
  render(){
    return (
    <div className="header">
     <ul>
     <li><a href="#library">Library</a></li>
     <li><a href="#recently added">Recently Added</a></li>
     <li><a href="#watch list">Watch List</a></li>
     <li><a href="#search">Search</a></li>
     </ul>
    </div>
  )
 }
}

