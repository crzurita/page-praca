import Page from '../../components/Page';
import styles from './proyectos.module.scss';
import Link from 'next/link';
import items from './items';

const Proyectos = () => {
  return (
    <Page title="Praca">
      <section className={styles.proyectos}>
        <div className={styles.proyectos__image}>
          <img className="img-responsive" src="/nuestros-proyectos.png" alt=""/>
        </div>
        <div className="grid columns-3 margin-center relative row-gap-50 column-gap-50  max-width-1200">
          {items.map(item => (
            <Link key={item.id} href={`/proyectos/detalle/${item.id}`}>
              <div className={styles.proyectos__item}>
                <div className={styles.proyectos__itemImage}>
                  <img className="img-responsive" src={item.image} alt=""/>
                  <img className={styles.proyectos__itemTriangulo}  src="/proyectos-triangulo.png" alt=""/>
                </div>
                <p className={styles.proyectos__name}>{item.name}</p>
                {item.finance
                  ? <p className={styles.proyectos__caption}>Financiación: <span className={styles.proyectos__captionGreen}>{item.finance}</span></p>
                  : <p className={styles.proyectos__caption}>{item.caption}</p>}
              </div>
            </Link>
          ))}
          <div>
            <img className="img-responsive" src="/proyecto-praca.png" alt=""/>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Proyectos;