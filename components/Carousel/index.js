import { useState } from 'react';
import styles from './carousel.module.scss';
import Zoom from '../Zoom';

const Carousel = ({slides, background}) => {
  const defaultCarouselImages = slides.map((slide, i) => ({slide, active: i === 0 ? true : false}));
  const [carouselImages, setCarouselImages] = useState(defaultCarouselImages)
  const [isZoom, setZoom] = useState({isVisible: false, image: ''});

  const applyZoom = (image = '') => {
    setZoom({image, isVisible: !isZoom.isVisible})
  }

  const getCurrentAndApplyZoom = (carousel) => {
    const current = carousel.find(slide => slide.active);
    applyZoom(current.slide);
  }

  const changeSlide = (direction) => {
    const slider = [...carouselImages];
    const current = slider.find(slide => slide.active);
    const index = slider.indexOf(current);
    current.active = false;
    switch (direction) {
      case 'prev':
        if (slider[index - 1]) {
          slider[index - 1].active = true;
        } else {
          slider[slider.length - 1].active = true;
        }
        break;
      
      case 'next':
        if (slider[index + 1]) {
          slider[index + 1].active = true;
        } else {
          slider[0].active = true;
        }
        break;

      default:
        break;
    }
    setCarouselImages(slider);
  }
  return (
    <div style={{backgroundColor: background ? background : 'white'}} className={styles.imageCarousel__container}>
      <div className={styles.imageCarousel__zoomButton}>
        <img onClick={() => getCurrentAndApplyZoom(carouselImages)} src="/zoom-button.png" alt=""/>
      </div>
      <div className={styles.imageCarousel}>
        <Zoom {...isZoom} onExit={applyZoom} />
        {carouselImages
          .map(slide => (
            <img
              key={slide.slide}
              src={slide.slide}
              className={`img-responsive ${styles.imageCarouselSlide} ${slide.active ? styles.imageCarouselSlideActive : ''}`}
              alt=""/>
          ) )}
        <div onClick={() => changeSlide('prev')} className={styles.imageCarousel__leftButton}><img src="/left-arrow.png" alt=""/></div>
        <div onClick={() => changeSlide('next')} className={styles.imageCarousel__rightButton}><img src="/right-arrow.png" alt=""/></div>
      </div>
    </div>
  )
}

export default Carousel;