import Header from '../Header';
import Footer from '../Footer';


const Layout = ({header, footer, children}) => {

  return(
    <div>
      {header && <Header {...header} />}
      <main>{children}</main>
      {footer && <Footer />}
    </div>
  )
}

export default Layout;