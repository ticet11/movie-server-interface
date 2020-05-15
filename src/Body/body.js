import React, { Component } from "react";

import Carousel from '../carousel/carousel'

export default class BodyContainer extends Component {
  render() {
    return (
      <div className='CarouselWrapper'>
        <h2>Family Movie Night</h2>
          <div>
            <Carousel />
          </div>
        <h2>New Movies</h2>  
          <div>
            <Carousel />
          </div> 
        <h2>Favorites</h2> 
          <div>
            <Carousel />
          </div>
      </div>
    );
  }
}