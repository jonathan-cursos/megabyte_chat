import router from 'next/router'
import Layout from '../../../components/Layout'
import Messages from '../../../components/Messages'

const ChatMessages = () => {
  return (
    <>
      <Layout>
        <Messages chatId={router.query.id} />
      </Layout>
    </>
  )
}

export default ChatMessages
