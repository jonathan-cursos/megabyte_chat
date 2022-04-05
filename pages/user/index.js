import Head from 'next/head'
import Users from '../../components/Users'
import { colors } from '../../styles/theme'
import Loader from '../../components/Loader'
import useGetData from '../../hooks/useGetData'

const User = () => {
  const { data: users, isLoading, isError } = useGetData()

  if (isError)
    return (
      <>
        <p className='fetch_error'>Error: {isError.message}</p>
        <style jsx>{`
          .fetch_error {
            color: red;
            font-size: 1.5rem;
          }
        `}</style>
      </>
    )

  if (isLoading) return <Loader />

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
              <Users name={user.name} key={user._id} id={user._id} />
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

        .fetch_error {
          color: red;
          font-size: 1.6rem;
        }
      `}</style>
    </>
  )
}

export default User
