import Page from '../../components/Page';
import styles from './servicios.module.scss';
import List from './components/list';
import { getServicios } from '../../lib/servicios';

export async function getStaticProps() {
  const items = getServicios();
  return {
      props: {
          items
      }
  }
}

const Servicios = ({items}) => {

  return (
    <Page title="Praca" customClass={styles.home}>
      <section className={styles.servicios}>
        <div className={styles.servicios__list}>
          <List itemList={items} />
        </div>
        <div className={`margin-center ${styles.servicios__logo}`}>
          <img className="img-responsive" src="/servicios-logo.png" alt=""/>
        </div>
      </section>
    </Page>
  )
}

export default Servicios;