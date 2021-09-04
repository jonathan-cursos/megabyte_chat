import Head from 'next/head'
import Users from '../../components/Users'
import { colors, boxShadow } from '../../styles/theme'
import { API } from '../../config'

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

      <style jsx>{`
        p {
          color: ${colors.primary};
          font-size: 1.4rem;
          text-align: center;
        }

        ul {
          width: 100%;
          height: 450px;
          padding: 20px;
          margin-top: 20px;
          box-shadow: ${boxShadow};
          overflow-y: auto;
          border-radius: 20px;
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
