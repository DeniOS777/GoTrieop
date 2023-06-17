import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Slider = () => {
  return (
    <>
      <Carousel
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_640.jpg"
            alt="forest"
            height="400"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
            alt="man in the forest"
            height="400"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_640.jpg"
            alt="forest"
            height="400"
          />
        </div>
      </Carousel>
    </>
  );
};
