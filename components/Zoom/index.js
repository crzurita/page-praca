import { useState } from 'react';
import styles from './zoom.module.scss';

const Zoom = ({isVisible, image, onExit}) => {

  const [position, setPosition] = useState(0);
  const setRotation = (ev) => {
    ev.stopPropagation();
    if(position === 270) {
      setPosition(0);
    } else {
      setPosition(position + 90);
    }
  }

  const onClose = () => {
    onExit()
    setPosition(0);
  }

  return (
    <div onClick={onClose} className={`${styles.zoom} ${ isVisible ? styles.zoomActive : ''}`}>
      <img onClick={setRotation} className={styles.zoom__rotateButton} src="/rotate.png" alt=""/>
      <img className={styles.zoom__image} style={{transform: `rotate(${position}deg)`}} src={image} alt=""/>
    </div>
  )
}

export default Zoom;