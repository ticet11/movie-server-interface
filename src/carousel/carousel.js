import React from 'react';
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


export default () => (
  <CarouselProvider
    visibleSlides={4}
    totalSlides={6}
    naturalSlideWidth={400}
    naturalSlideHeight={500}
  >

    <Slider>
      <Slide index={0}>
        <Image src="/assets/airplane.jpg" />
      </Slide>
      <Slide index={1}>
        <Image src="/assets/harryPotter.jpg" />
      </Slide>
      <Slide index={2}>
        <Image src="/assets/captainAmerica.jpg" />
      </Slide>
      <Slide index={3}>
        <Image src="./assets/closeEncounters.jpg" />
      </Slide>
      <Slide index={4}>
        <Image src="./assets/theLorax.jpg" />
      </Slide>
      <Slide index={5}>
        <Image src="./assets/donnieDarko.jpg" />
      </Slide>
    </Slider>
    <ButtonFirst>First</ButtonFirst>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    <ButtonLast>Last</ButtonLast>
    <DotGroup dotNumbers />
  </CarouselProvider>
);