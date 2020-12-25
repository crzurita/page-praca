import styles from './header.module.scss';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MenuIcon from './components/menu-icon';
import Link from 'next/link';
import { getSlides } from './content';
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = ({slider}) => {
  const router = useRouter();
  const [menuState, setMenuState] = useState(false);
  const links = ['HOME', 'SERVICIOS', 'PROYECTOS', 'CONTACTO'];
  const slides = getSlides(router.pathname);

  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <MenuIcon onClick={() => setMenuState(!menuState)} />
        <div className={styles.header__logo}>
          <div className="img-responsive">
            <img 
              src="/header-logo.png" />
          </div>
        </div>
        {/* <ul className={styles.header__socialNetwork}>
          <li><img src="/icon-facebook.png" alt=""/></li>
          <li><img src="/icon-instagram.png" alt=""/></li>
        </ul> */}
      </div>
     <nav className={styles.header__navbar}>
        <ul className={`${styles.header__navigation} ${menuState ? styles.header__navigationOpen : styles.header__navigationClosed}`}>
          {links.map(link => (
            link === 'HOME'
              ? <li key={link}><Link href="/"><a style={{color: router.pathname.match('/\/\$/') ? '#009540' : 'white'}}>{link}</a></Link></li>
              : <li key={link}><Link href={`/${link.toLowerCase()}`}><a style={{color: router.pathname.match(link.toLowerCase()) ? '#009540' : 'white'}}>{link}</a></Link></li>
          ))}
        </ul>
      </nav>
      {slider && <div className={styles.header__slider}>
        <Carousel
          autoplay={true}>
            {slides.map(slide => (
              <img key={slide.id} src={slide.slide} />
            ))}
        </Carousel>
      </div>}
    </header>
  )
}

export default Header;