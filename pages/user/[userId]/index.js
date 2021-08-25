import Head from 'next/head'
import Chats from '../../../components/Chats'
import Layout from '../../../components/Layout'
import { colors, boxShadow } from '../../../styles/theme'

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
                <Chats
                  chatId={chat._id}
                  userName={userItem.name}
                  userId={userId}
                />
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
          height: 450px;
          padding: 20px;
          margin-top: 20px;
          box-shadow: ${boxShadow};
          overflow-y: auto;
          border-radius: 20px;
        }
      `}</style>
    </>
  )
}

Chat.getInitialProps = (ctx) => {
  const userId = ctx.query.userId
  return fetch(`https://megabyte-chat-be.herokuapp.com/chat/${userId}`)
    .then((res) => res.json())
    .then(({ body: chats }) => {
      return { chats, userId }
    })
}

export default Chat
