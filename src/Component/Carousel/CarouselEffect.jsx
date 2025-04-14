import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './carousel.module.css';

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
          img.map((imageItemLink, index) => (
            <img src={imageItemLink} alt={`carousel-img-${index}`} key={index} />
          ))
        }
      </Carousel>
      <div className={classes.hero_img}>
        {/* Hero image can go here */}
      </div>
    </div>
  );
}

export default CarouselEffect;