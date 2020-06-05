import React, { Component } from "react";

import Carousel from '../carousel/carousel'

export default class BodyContainer extends Component {
  render() {
    return (
      <div className='CarouselWrapper'>
        <h2>Family Movie Night</h2>
          <div>
            <Carousel genre='Animation' />
          </div>
        <h2>Something Funny</h2>  
          <div>
            <Carousel genre='Comedy' />
          </div> 
        <h2>Action Packed</h2> 
          <div>
            <Carousel genre='Action' />
          </div>
      </div>
    );
  }
}