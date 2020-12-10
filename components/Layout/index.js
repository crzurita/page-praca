import Header from '../Header';
import Footer from '../Footer';


const Layout = ({defaultHeader = true, defaultFooter = true, children}) => {

  return(
    <div>
      {defaultHeader && <Header />}
      <main>{children}</main>
      {defaultFooter && <Footer />}
    </div>
  )
}

export default Layout;