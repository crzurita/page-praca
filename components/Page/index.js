import Head from 'next/head';
import Layout from '../Layout';
import styles from '../../styles/utils.module.scss';
const initialLayout = {
  header: {
    slider: true,
  },
  footer: true
}

const Page = ({children, title, layout = initialLayout}) => {
  const asdf = layout ? Object.assign({}, initialLayout, layout.header) : initialLayout;
  const renderLayout = layout
    ? (<Layout {...layout}>
        {children}
    </Layout>) : {children}

  return (
    <div className={styles.page}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {renderLayout}
    </div>
  )
}

export default Page;