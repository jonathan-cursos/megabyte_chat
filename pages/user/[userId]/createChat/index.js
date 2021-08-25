import Layout from '../../../../components/Layout'
import { API } from '../../../../config'
const createChat = ({ chats }) => {
  return (
    <>
      <Layout>
        <h2>Hello world</h2>
      </Layout>
    </>
  )
}

createChat.getInitialProps = (ctx) => {
  return fetch(`${API}/chat/${ctx.query.userId}?filt='noChat'`)
    .then((res) => res.json())
    .then(({ body: chats }) => {
      return { chats }
    })
}

export default createChat
