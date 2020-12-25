import Page from '../../../components/Page';
import Carousel from '../../../components/Carousel';
import { getMoreProjects } from '../../../lib/projects';
import styles from './mas-proyectos.module.scss';

export async function getStaticProps() {
  const list = getMoreProjects();
  return {
      props: {
          list
      }
  }
}

const MoreProjects = ({list}) => {
  const isEven = (index) => {
    return index % 2;
  }
  const layout = {
    header: {
      slider: false
    }
  }
  return (
    <Page title="Praca" layout={layout}>
      <section className={styles.detalle}>
        <div className={styles.detalle__info}>
          {list.map((info, index) => (
            <div key={info.id} className={`${styles.detalle__container} ${isEven(index) ? styles.detalle__containerOdd : styles.detalle__containerEven}`}>
              <div className={styles.detalle__infoProject}>
                <p className={styles.detalle__name}>{info.name}</p>
                <p className={styles.detalle__project}>{info.description}</p>
                <p className={styles.detalle__ubication}><span>Ubicación: </span>{info.ubication}</p>
                <p className={styles.detalle__year}><span>Año: </span>{info.year}</p>
                <p className={styles.detalle__state}><span>Estado: </span>{info.state}</p>
              </div>
              <div className={styles.detalle__image}>
                <Carousel slides={info.blueprints} background={isEven(index) ? '#009540' : 'white'} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Page>
  )
}

export default MoreProjects;