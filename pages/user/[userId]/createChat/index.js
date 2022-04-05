import { useEffect, useState } from 'react'
import Head from 'next/head'
import { API } from '../../../../config'
import { colors } from '../../../../styles/theme'
import { useRouter } from 'next/router'
import NewChatButton from '../../../../components/NewChatButton'
import useGetData from '../../../../hooks/useGetData'
import Loader from '../../../../components/Loader'
import validateUsers from '../../../../utils/validateUser'

import FETCH_STATES from '../../../../fetchStates'

const createChat = () => {
  const router = useRouter()
  const { userId: chatCreator } = router.query
  const { data: users, isLoading, isError } = useGetData()
  const [validUsers, setValidUsers] = useState([])
  const [sendState, setSendState] = useState(FETCH_STATES.INITIAL)

  useEffect(async () => {
    if (users.body) {
      const usersValidated = await validateUsers(users.body, chatCreator)
      setValidUsers(usersValidated)
    }
  }, [users])

  const handleCreateChat = async (chatCreator, targetId) => {
    setSendState(FETCH_STATES.LOADING)
    try {
      await fetch(`${API}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          users: [chatCreator, targetId]
        })
      })
      setSendState(FETCH_STATES.COMPLETE)
      router.push(`/user/${chatCreator}`)
    } catch (error) {
      setSendState(error)
    }
  }

  if (sendState === FETCH_STATES.LOADING || isLoading) {
    return <Loader />
  }

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
                    handleCreateChat={handleCreateChat}
                  />
                </li>
              )
            }
          })}
        </ul>
        {isError && <p className='fetch_error'>{isError.message}</p>}
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

        .fetch_error {
          color: red;
          font-size: 1.6rem;
        }
      `}</style>
    </>
  )
}

// export const getServerSideProps = async (ctx) => {
//   const { params } = ctx
//   const { userId: chatCreator } = params
//   const res = await fetch(`${API}/user/`)
//   const { body: users } = await res.json()
//   return { props: { users, chatCreator } }
// }

export default createChat
