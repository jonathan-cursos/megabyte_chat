import Head from 'next/head'
import Layout from '../../components/Layout'
import Users from '../../components/Users'
import styles from './styles'

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
            return <Users name={user.name} key={user.id} id={user.id} />
          })}
        </ul>
      </Layout>
      <style jsx>{styles}</style>
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
