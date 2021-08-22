import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const Chat = ({ chats, userId }) => {
  return (
    <>
      <Head>
        <title>Megabyte Chat - Chats</title>
      </Head>
      <Layout>
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
                <Link href={`/messages/${chat._id}`}>
                  <a>{userItem.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </Layout>
      <style jsx>{`
        p {
          color: white;
          font-size: 1.6rem;
        }

        ul {
          width: 100%;
          max-width: 300px;
          height: 130px;
          overflow-y: auto;
        }

        a {
          color: white;
          font-size: 1.6rem;
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
