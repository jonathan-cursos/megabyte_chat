import Link from 'next/link'
import Layout from '../components/Layout'
import { colors } from '../styles/theme'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Megabyte Chat - Menu</title>
      </Head>
      <Layout>
        <header>
          <h1>MEGABYTE CHAT</h1>
        </header>
        <div>
          <Link href='/user/create'>
            <a>Crear usuario</a>
          </Link>
          <Link href='/chat'>
            <a>Ingresar a chat</a>
          </Link>
        </div>
        <style jsx>{`
          div {
            padding: 10px;
            width: 100%;
            max-width: 500px;
            height: 300px;
          }

          header {
            color: ${colors.primary};
            padding-bottom: 20px;
          }

          h1 {
            font-size: 2.5rem;
            letter-spacing: 1rem;
            text-align: center;
          }

          a {
            color: ${colors.primary};
            text-decoration: none;
            display: block;
            font-size: 2rem;
            margin: 0 auto 10px;
            max-width: 150px;
          }
        `}</style>
      </Layout>
    </>
  )
}
