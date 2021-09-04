import Head from 'next/head'
import Link from 'next/link'
import Chats from '../../../components/Chats'
import { colors, boxShadow } from '../../../styles/theme'
import { API } from '../../../config'

const Chat = ({ chats, userId }) => {
  return (
    <>
      <Head>
        <title>Megabyte Chat - Chats</title>
      </Head>
      <div>
        <p>Escoge el chat al que deseas ingresar</p>
        <ul>
          {chats.map((chat) => {
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
          max-height: 400px;
          box-shadow: ${boxShadow};
          padding: 15px;
        }

        a {
          font-size: 1.6rem;
          color: ${colors.secondary};
          margin-top: 5px;
          display: block;
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = (ctx) => {
  const { userId } = ctx.query
  return fetch(`${API}/chat/${userId}`)
    .then((res) => res.json())
    .then(({ body: chats }) => {
      return { props: { chats, userId } }
    })
}

export default Chat
