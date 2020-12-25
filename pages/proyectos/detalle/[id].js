import Page from '../../../components/Page';
import Zoom from '../../../components/Zoom';
import { useRouter } from 'next/router';
import styles from './detalle.module.scss';
import { getAllProjectsIds, getProjectById } from '../../../lib/projects';
import { useState } from 'react';

export async function getStaticProps({params}) {
  const detail = getProjectById(params.id);
  return {
      props: {
          detail
      }
  }
}

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return {
      paths,
      fallback: false
  }
}


const Detalle = ({detail}) => {
  const { info, images, blueprints } = JSON.parse(detail);
  const router = useRouter();
  const { id } = router.query;
  const defaultCarouselImages = images.map((slide, i) => ({slide, active: i === 0 ? true : false}));
  const defaultCarouselBlueprints = blueprints.map((slide, i) => ({slide, active: i === 0 ? true : false}));
  const [carouselImages, setCarouselImages] = useState(defaultCarouselImages)
  const [carouselBlueprints, setCarouselBlueprints] = useState(defaultCarouselBlueprints);
  const [isZoom, setZoom] = useState({isVisible: false, image: ''});

  const applyZoom = (image = '') => {
    setZoom({image, isVisible: !isZoom.isVisible})
  }

  const getCurrentAndApplyZoom = (carousel) => {
    const current = carousel.find(slide => slide.active);
    applyZoom(current.slide);
  }

  const changeSlide = (carousel, direction, setter) => {
    const slider = [...carousel];
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
    setter(slider);
  }

  const layout = {
    header: {
      slider: false
    }
  }
  
  return (
    <Page title="Praca" layout={layout}>
      <section className={styles.detalle}>
      <Zoom {...isZoom} onExit={applyZoom} />
      <div className={`${styles.detalle__container} flex flex-center margin-center max-width-1200 margin-bottom-5`}>
        <div className={styles.detalle__info}>
          <div className={styles.detalle__infoProject}>
            <p className={styles.detalle__name}>{info.name}</p>
            <p className={styles.detalle__project}>{info.project}</p>
            {info.finance && <p className={styles.detalle__finance}>Financiado con crédito <span>{info.finance}</span></p>}
            <p className={styles.detalle__ubication}><span>Ubicación: </span>{info.ubication}</p>
            <p className={styles.detalle__year}><span>Año: </span>{info.year}</p>
            <p className={styles.detalle__state}><span>Estado: </span>{info.state}</p>
          </div>
          <div className={styles.detalle__image}>
            <p className={styles.detalle__process}><span>Proceso / </span>ANTES Y DESPUES</p>
            <div className={styles.detalle__imageCarousel}>
              {carouselImages
                .map(slide => (
                  <img
                    key={slide.slide}
                    src={slide.slide}
                    className={`img-responsive ${styles.detalle__imageCarouselSlide} ${slide.active ? styles.detalle__imageCarouselSlideActive : ''}`}
                    alt=""/>
                ) )}
              <div onClick={() => changeSlide(carouselImages, 'prev', setCarouselImages)} className={styles.imageCarousel__leftButton}><img src="/left-arrow.png" alt=""/></div>
              <div onClick={() => changeSlide(carouselImages, 'next', setCarouselImages)} className={styles.imageCarousel__rightButton}><img src="/right-arrow.png" alt=""/></div>
            </div>
          </div>
          <div className={styles.imageCarousel__zoomButton}>
            <img onClick={() => getCurrentAndApplyZoom(carouselImages)} src="/zoom-button.png" alt=""/>
          </div>
        </div>
        <div className={styles.blueprint}>
          <p className={styles.blueprint__name}>PLANOS</p>
          <div className={styles.detalle__blueprintCarousel}>
            {carouselBlueprints
              .map(slide => (
                <img
                  key={slide.slide}
                  src={slide.slide}
                  className={`img-responsive ${styles.detalle__blueprintCarouselSlide} ${slide.active ? styles.detalle__blueprintCarouselSlideActive : ''}`}
                  alt=""/>
              ))}
          </div>
          <div className={styles.blueprintCarousel__footer}>
              <div onClick={() => changeSlide(carouselBlueprints, 'prev', setCarouselBlueprints)}><img src="/left-arrow.png" alt="" className={styles.blueprintCarousel__leftButton}/></div>
              <div onClick={() => changeSlide(carouselBlueprints, 'next', setCarouselBlueprints)}><img src="/right-arrow.png" alt="" className={styles.blueprintCarousel__rightButton}/></div>
              <img onClick={() => getCurrentAndApplyZoom(carouselBlueprints)} className={styles.blueprintCarousel__zoomButton} src="/zoom-button.png" alt=""/>
          </div>
        </div>
      </div>
      </section>
    </Page>
  )
}

export default Detalle;