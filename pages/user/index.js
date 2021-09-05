import Head from 'next/head'
import Users from '../../components/Users'
import { colors, boxShadow } from '../../styles/theme'
import { API } from '../../config'
import Spinner from '../../components/Spinner'

const User = ({ users }) => {
  return (
    <>
      <Head>
        <title>Megabyte Chat - Ingresar</title>
      </Head>
      <p>Escoge el usuario con el que quieres ingresar</p>
      <ul>
        {users.map((user) => {
          return (
            <li key={user._id}>
              <Users name={user.name} key={user.id} id={user._id} />
            </li>
          )
        })}
      </ul>
      <Spinner />
      <style jsx>{`
        p {
          color: ${colors.primary};
          font-size: 1.4rem;
          text-align: center;
        }

        ul {
          overflow-y: scroll;
          min-height: 200px;
          max-height: 400px;
          box-shadow: ${boxShadow};
          padding: 15px;
        }

        li {
          height: 40px;
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = () => {
  return fetch(`${API}/user`)
    .then((res) => res.json())
    .then(({ body }) => {
      return { props: { users: body } }
    })
}

export default User
