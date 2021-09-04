import Layout from '../components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { colors } from '../styles/theme'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Megabyte Chat - Menu</title>
      </Head>
      <div>
        <button
          type='button'
          onClick={() => {
            router.push('/user')
          }}
        >
          Ingresar
        </button>
        <button
          type='button'
          onClick={() => {
            router.push('/user/create')
          }}
        >
          Crear usuario
        </button>
      </div>
      <style jsx>{`
        button {
          display: block;
          margin: 20px auto;
          width: 200px;
          height: 55px;
          border: none;
          border-radius: 250px;
          font-size: 2rem;
          color: ${colors.white};
          text-decoration: none;
          text-align: center;
          background-color: ${colors.secondary};
          transition: 0.4s;
        }

        button:hover {
          opacity: 0.5;
        }
      `}</style>
    </>
  )
}
