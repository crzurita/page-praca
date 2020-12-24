import {useState} from 'react';
import styles from './item.module.scss';

const Item = ({icon, active, detail}) => {

  return (
    <div
      className={`${styles.item} ${active ? styles.itemActive : styles.itemDefault}`}>
      <div className={styles.item__icon}>
        <img src={icon} alt=""/>
        <div className={styles.item__arrow} style={{display: active ? 'block' : 'none'}}>
          <img className="img-responsive" src="/triangulo.png" alt=""/>
          </div>
        </div>
      <div className={`${styles.item__detail} ${active ? styles.item__detailActive : styles.item__detailDefault}`}>
        <div className={styles.detail__text}>
          <p className={styles.detail__name}>{detail.name}</p>
          {detail.description.map(description => (
            <p key={description} className={styles.detail__description}>{description}</p>))
          }
        </div>
        <div className={styles.detail__image}>
          <img className="img-responsive" src={detail.image} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Item;