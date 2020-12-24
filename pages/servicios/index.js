import Page from '../../components/Page';
import styles from './servicios.module.scss';
import List from './components/list';
import { items } from './items';

const Servicios = () => {

  return (
    <Page title="Praca" customClass={styles.home}>
      <section className={styles.servicios}>
        <div>
          <List itemList={items} />
        </div>
        <div className="align-center">
          <img className="img-responsive" src="/servicios-logo.png" alt=""/>
        </div>
      </section>
    </Page>
  )
}

export default Servicios;