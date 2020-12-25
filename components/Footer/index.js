import Link from 'next/link';
import styles from './footer.module.scss';
const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <ul className={styles.footer__links}>
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/servicios">SERVICIOS</Link></li>
          <li><Link href="/proyectos">PROYECTOS</Link></li>
          <li><Link href="/contacto">CONTACTANOS</Link></li>
        </ul>
        <ul className={styles.footer__contact}>
          <li><img src="/footer-icon-mail.png" alt=""/></li>
          <li>parcaconstrucciones@gmail.com</li>
          {/* <li><img src="/footer-icon-face.png" alt=""/></li>
          <li><img src="/footer-icon-insta.png" alt=""/></li> */}
        </ul>
      </div>
    </footer>
  )
}

export default Footer;