import Layout from '../../../components/Layout'

const ChatMessages = ({ messages }) => {
  return (
    <>
      <Layout>{console.log('messages')}</Layout>
    </>
  )
}

ChatMessages.getInitialProps = (ctx) => {
  fetch(`http://localhost:3001/message/${ctx.query.id}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
  return {}
}

export default ChatMessages
