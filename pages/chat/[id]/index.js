import Head from 'next/head'
import Layout from '../../../components/Layout'

const Chat = ({chats}) => {
  return (
    <>
    <Head>
      <title>Megabyte Chat - Chats</title>
    </Head>
      <Layout>
        {console.log(chats)}
      </Layout>
    </>
  )
}

Chat.getInitialProps = (ctx) => {
  const userId = ctx.query.id
  return fetch(`http://localhost:3001/chat/${userId}`)
  .then(res => res.json())
  .then(({body: chats}) => {
    return {chats}
  })
}

export default Chat
