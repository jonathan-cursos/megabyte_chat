import Head from 'next/head'
import globals, { styles } from './styles'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <header>
          <h1>MEGABYTE CHAT</h1>
        </header>
        {children}
        <style jsx>{styles}</style>
        <style jsx global>
          {globals}
        </style>
      </main>
    </div>
  )
}

export default Layout
