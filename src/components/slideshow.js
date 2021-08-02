import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slideshow.css';

const fadeImages = [
  'images/img-1.jpg',
  'images/img-2.jpg',
  'images/img-3.jpg'
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade autoplay='true' infinite = 'true' duration = '4000'>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Slideshow;