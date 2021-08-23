import Head from 'next/head'
import Link from 'next/link'
import Chats from '../../../components/Chats'
import Layout from '../../../components/Layout'
import { colors } from '../../../styles/theme'

const Chat = ({ chats, userId }) => {
  return (
    <>
      <Head>
        <title>Megabyte Chat - Chats</title>
      </Head>
      <Layout>
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
                <Chats chatId={chat._id} userName={userItem.name} />
              </li>
            )
          })}
        </ul>
      </Layout>
      <style jsx>{`
        p {
          color: ${colors.primary};
          font-size: 1.6rem;
        }

        ul {
          width: 100%;
          max-width: 300px;
          height: 130px;
          overflow-y: auto;
        }
      `}</style>
    </>
  )
}

Chat.getInitialProps = (ctx) => {
  const userId = ctx.query.id
  return fetch(`http://localhost:3001/chat/${userId}`)
    .then((res) => res.json())
    .then(({ body: chats }) => {
      return { chats, userId }
    })
}

export default Chat
