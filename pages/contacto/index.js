import Page from '../../components/Page';
import styles from './contacto.module.scss';
import { useState } from 'react';

const Contacto = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const getTemplate = ({name, phone, email, message}) => (
    `¡Hola! mi nombre es ${name}, mi teléfono ${phone}, mi email ${email}. Consulto lo siguiente: ${message}`
  );

  const onInputChange = (ev) => {
    const {name, value} = ev.currentTarget;
    setForm({...form, [name]: value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const companyPhone = '3515064135';
    const message = getTemplate(form).replace(' ', '%20');
    location.assign(`https://api.whatsapp.com/send?phone=${companyPhone}&text=${message}`);
  }
  return (
    <Page title="Praca">
      <section className={styles.contacto}>
        <form onSubmit={onSubmit}>
        <div className="flex flex-center margin-center max-width-1200 margin-bottom-5">
          <div className={styles.contacto__leftside}>
            <img className="img-responsive" src="/tu-consulta.png" alt=""/>
            <div className={styles.contacto__input}>
              <div htmlFor="name">Nombre</div>
              <input
                onChange={onInputChange}
                name="name"
                type="text"
                value={form.name}
                required />
            </div>
            <div className={styles.contacto__input}>
              <div htmlFor="phone">Teléfono</div>
              <input
                onChange={onInputChange}
                name="phone"
                type="number"
                value={form.phone}
                required
                />
            </div>
            <div className={styles.contacto__input}>
              <div htmlFor="email">E-mail</div>
              <input
                onChange={onInputChange}
                name="email"
                type="email"
                value={form.email}
                required/>
            </div>
          </div>
          <div className={styles.contacto__rightside}>
            <div className={styles.contacto__input}>
              <textarea
                onChange={onInputChange}
                name="message"
                placeholder="Mensaje"
                value={form.message}
                required></textarea>
              <button
                className={styles.contacto__button}
                >Enviar</button>
            </div>
          </div>
        </div>
        </form>
        <div className="flex space-around margin-center max-width-1200">
          <ul className={styles.contacto__mandaMensaje}>
            <li>¡Mandanos tu mensaje!</li>
            <li><img src="/contacto-whatsapp.png" alt=""/></li>
          </ul>
          <div>
            <img className="img-responsive" src="/contacto-praca.png" alt=""/>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Contacto;