import Link from 'next/link'
import Layout from '../components/Layout'
import { colors } from '../styles/theme'

export default function Home() {
  return (
    <Layout>
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
          border: 1px solid ${colors.primary};
          width: 100%;
          max-width: 500px;
          height: 300px;
        }

        a {
          color: ${colors.primary};
          text-decoration: none;
          display: block;
          font-size: 1.6rem;
        }
      `}</style>
    </Layout>
  )
}
