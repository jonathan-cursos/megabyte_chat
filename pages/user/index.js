import Head from 'next/head'
import Layout from '../../components/Layout'
import Users from '../../components/Users'
import { colors, boxShadow } from '../../styles/theme'
import { LOCAL_SRV } from '../../config'

const User = ({ users }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Megabyte Chat - Users</title>
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
      </Layout>
      <style jsx>{`
        p {
          color: ${colors.primary};
          font-size: 2rem;
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

User.getInitialProps = () => {
  return fetch(`${LOCAL_SRV}/user`)
    .then((res) => res.json())
    .then(({ body }) => {
      return { users: body }
    })
}

export default User
