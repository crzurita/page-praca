import styles from './header.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const router = useRouter();
const namespace = 'header';
const links = ['HOME', 'SERVICIOS', 'PROYECTOS', 'CONTACTOS'];

  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <div className={styles.header__logo}>
          <div className="img-responsive">
            <img 
              src="/header-logo.png" />
          </div>
        </div>
        <ul className={styles.header__socialNetwork}>
          <li><img src="/icon-facebook.png" alt=""/></li>
          <li><img src="/icon-instagram.png" alt=""/></li>
        </ul>
      </div>
      <nav className={styles.header__navbar}>
        <ul className={styles.header__navigation}>
          {links.map(link => (
            link === 'HOME'
              ? <li><Link href="/"><a style={{color: router.pathname.match('/') ? '#009540' : 'white'}}>{link}</a></Link></li>
              : <li><Link href={`/${link.toLowerCase()}`}><a style={{color: router.pathname.match(link) ? '#009540' : 'white'}}>{link}</a></Link></li>
          ))}
        </ul>
      </nav>
      <div className={styles.header__slider}>
        <Carousel
          autoplay={true}>
            <img src="/home-slide1.jpg" />
          <img src="/home-slide2.jpg" />
          <img src="/home-slide3.jpg" />
        </Carousel>
      </div>
    </header>
  )
}

export default Header;