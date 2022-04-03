import Head from 'next/head'
import Link from 'next/link'
import Chats from '../../../components/Chats'
import { colors } from '../../../styles/theme'
import { useRouter } from 'next/router'
import Loader from '../../../components/Loader'
import useGetData from '../../../hooks/useGetData'

const Chat = () => {
  const router = useRouter()
  const { userId } = router.query
  const { data: chats, isError, isLoading } = useGetData({ userId })

  if (isError)
    return (
      <>
        <p className='fetch_error'>Error: {error.message}</p>
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
        <title>Megabyte Chat - Chats</title>
      </Head>
      <div>
        <p>Escoge el chat al que deseas ingresar</p>
        <ul>
          {chats.body.map((chat) => {
            let userItem = {}
            chat.users.filter((user) => {
              if (user._id !== userId) {
                userItem = user
              }
              return userItem
            })
            return (
              <li key={chat._id}>
                <Chats
                  chatId={chat._id}
                  userName={userItem.name}
                  userId={userId}
                />
              </li>
            )
          })}
        </ul>
        <Link href={`/user/${userId}/createChat`}>
          <a>Crear un nuevo chat</a>
        </Link>
      </div>
      <style jsx>{`
        p {
          color: ${colors.primary};
          font-size: 1.4rem;
          text-align: center;
          margin-bottom: 5px;
        }

        ul {
          overflow-y: scroll;
          min-height: 200px;
          max-height: 500px;
          padding: 15px;
        }

        a {
          font-size: 1.6rem;
          color: ${colors.secondary};
          margin-top: 5px;
          display: block;
          text-decoration: none;
          padding-left: 15px;
        }
      `}</style>
    </>
  )
}

export default Chat
