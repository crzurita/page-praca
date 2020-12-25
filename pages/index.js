import Page from '../components/Page'
import styles from './home.module.scss';
const layoutProps = {
  header: {
    slider: false
  }
}

const Home = () => {
  return (
    <Page title="Praca" customClass={styles.home}>
      <section className={styles.home__somosHacemos}>
        <div className={styles.home__somosHacemosContent}>
        <ul className={styles.home__titleList}>
          <li className={styles.home__itemListBlack}>LO</li>
          <li className={styles.home__itemListBlack}>QUE</li>
          <li className={styles.home__itemListGreen}>SOMOS</li>
          <li className={styles.home__itemListGreen}><span style={{color: "black"}}>Y &nbsp;</span>&nbsp;LO &nbsp; QUE</li>
          <li className={styles.home__itemListGreen}>HACEMOS</li>
        </ul>

        <p className={styles.home__paragraph}>
          Somos un estudio especializado en diseños premium de residencias,<br />
          edificios de vivienda y comerciales, con gran experiencia en el ámbito <br />
          de la construcción, lo que nos permite proyectar con una alta calidad en la <br />
          resolución espacial y de cada uno de los detalles. Abordamos todas las fases <br />
          de una obra de Arquitectura, Proyecto – Dirección – Administración y Construcción.
        </p>

        <p className={styles.home__paragraph}>
          En un mundo en donde los sueños parecen irrealizables, en la mejor expresión de <br />
          la arquitectura es posible convertirlos en una realidad concreta, genuina y real.
        </p>

        <p className={styles.home__paragraph}>
          Creemos en la arquitectura como arte y ciencia para <br />
          crear un marco a nuestra vida.
        </p>

        </div>
      </section>

      <section className={styles.queHacemos}>
        <div className={styles.queHacemos__item}>
          <div className={styles.queHacemos__icon}>
            <img className="img-responsive" src="/hacemos-icon-herramienta.png" alt=""/>
          </div>
          <p className={styles.queHacemos__title}>Rehabilitación y reformas</p>
          <p className={styles.queHacemos__description}>
            Recuperamos y renovamos las
            edificaciones, restaurando sus elementos
            característicos y aumentando su valor
            patrimonial.
          </p>
        </div>
        <div className={styles.queHacemos__item}>
          <div className={styles.queHacemos__icon}>
            <img className="img-responsive" src="/hacemos-icon-casa.png" alt=""/>
          </div>
          <p className={styles.queHacemos__title}>Proyectos de obra nueva</p>
          <p className={styles.queHacemos__description}>
            Diseñamos desde cero el proyecto que
            quieres poner en marcha, asesorándote
            en todo el proceso.
          </p>
        </div>
        <div className={styles.queHacemos__item}>
          <div className={styles.queHacemos__icon}>
            <img className="img-responsive" src="/hacemos-icon-llave.png" alt=""/>
          </div>
          <p className={styles.queHacemos__title}>Servicios llave en mano</p>
          <p className={styles.queHacemos__description}>
            Damos una respuesta integral a tu proyecto,
            aportándote tanto el proyecto como la
            ejecución de la obra a precio cerrado.
          </p>
        </div>
      </section>
      <img className="img-responsive full-width" src="/home-procrear-banner.jpg" alt=""/>
    </Page>
  )
}

export default Home;