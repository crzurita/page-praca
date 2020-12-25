import styles from './footer.module.scss';
const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <ul className={styles.footer__links}>
          <li>HOME</li>
          <li>SERVICIOS</li>
          <li>PROYECTOS</li>
          <li>CONTACTANOS</li>
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