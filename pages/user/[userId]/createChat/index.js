import { useEffect, useState } from 'react'
import Head from 'next/head'
import { API } from '../../../../config'
import { colors } from '../../../../styles/theme'
import NewChatButton from '../../../../components/NewChatButton'
import validateUsers from '../../../../utils/validateUser'

const createChat = ({ users, chatCreator }) => {
  const [validUsers, setValidUsers] = useState([])

  useEffect(async () => {
    const usersValidated = await validateUsers(users, chatCreator)
    setValidUsers(usersValidated)
  }, [])

  return (
    <>
      <Head>
        <title>Megabyte Chat - Nuevo chat</title>
      </Head>
      <div>
        <p>Indica el usuario con el que iniciaras un chat</p>
        <ul>
          {validUsers.map((user) => {
            if (user._id !== chatCreator) {
              return (
                <li key={user._id}>
                  <NewChatButton
                    user={user._id}
                    name={user.name}
                    chatCreator={chatCreator}
                  />
                </li>
              )
            }
          })}
        </ul>
      </div>
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
      `}</style>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx
  const { userId: chatCreator } = params
  const res = await fetch(`${API}/user/`)
  const { body: users } = await res.json()
  return { props: { users, chatCreator } }
}

export default createChat
