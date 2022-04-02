import Head from 'next/head'
import useSwr from 'swr'
import Users from '../../components/Users'
import { colors } from '../../styles/theme'
import { API } from '../../config'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const User = () => {
  const { data: users, error } = useSwr(`${API}/user`, fetcher)

  if (error) return <p>{error}</p>

  if (!users) return <p>Loading....</p>

  return (
    <>
      <Head>
        <title>Megabyte Chat - Ingresar</title>
      </Head>
      <p>Escoge el usuario con el que quieres ingresar</p>
      <ul>
        {users.body.map((user) => {
          return (
            <li key={user._id}>
              <Users name={user.name} key={user.id} id={user._id} />
            </li>
          )
        })}
      </ul>
      <style jsx>{`
        p {
          color: ${colors.primary};
          font-size: 1.4rem;
          text-align: center;
        }

        ul {
          overflow-y: scroll;
          min-height: 200px;
          max-height: 500px;
          padding: 15px;
        }

        li {
          height: 40px;
        }
      `}</style>
    </>
  )
}

// export const getServerSideProps = async () => {
//   const res = await fetch(`${API}/user`)
//   const { body } = await res.json()
//   return { props: { users: body } }
// }

export default User
