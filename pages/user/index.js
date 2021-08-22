import Head from 'next/head'
import Layout from '../../components/Layout'
import Users from '../../components/Users'

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
        ul {
          width: 100%;
          max-width: 300px;
          height: 130px;
          overflow-y: auto;
        }

        li {
          height: 30px;
          display: flex;
          align-items: center;
        }

        p {
          color: ${colors.primary};
          font-size: 1.4rem;
        }
      `}</style>
    </>
  )
}

User.getInitialProps = () => {
  return fetch('http://localhost:3001/user')
    .then((res) => res.json())
    .then(({ body }) => {
      return { users: body }
    })
}

export default User
