import Head from 'next/head'
import globals, { styles } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <div>
          <header>
            <h1>MEGABYTE CHAT</h1>
          </header>
          {children}
        </div>
        <style jsx>{styles}</style>
        <style jsx global>
          {globals}
        </style>
      </main>
    </>
  )
}

export default Layout
