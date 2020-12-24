import { useState, useEffect, useRef } from 'react';
import styles from './zoom.module.scss';

const Zoom = ({isVisible, image, onExit}) => {
  return (
    <div onClick={() => onExit()} className={`${styles.zoom} ${ isVisible ? styles.zoomActive : ''}`}>
      <img className={styles.zoom__image} src={image} alt=""/>
    </div>
  )
}

export default Zoom;