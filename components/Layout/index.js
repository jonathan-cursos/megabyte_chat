import Head from 'next/head'
import styles from './styles'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        {children}
        <style jsx global>
          {styles}
        </style>
      </main>
    </div>
  )
}

export default Layout
