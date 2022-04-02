import Head from 'next/head'
import Users from '../../components/Users'
import { colors } from '../../styles/theme'
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

export const getServerSideProps = () => {
  console.log(process.env.NEXT_PUBLIC_BE_API)
  return fetch(`${process.env.NEXT_PUBLIC_BE_API}/user`)
    .then((res) => res.json())
    .then((data) => {
      return { props: { users: data.body } }
    })
}

export default User
