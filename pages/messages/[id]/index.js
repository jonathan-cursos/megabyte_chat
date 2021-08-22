import Layout from '../../../components/Layout'

const ChatMessages = ({ messages }) => {
  return (
    <>
      <Layout>
        {messages.map((message) => (
          <article key={message._id}>
            <p>{message.content}</p>
            <p>{message.date}</p>
          </article>
        ))}
      </Layout>
    </>
  )
}

ChatMessages.getInitialProps = (ctx) => {
  return fetch(`http://localhost:3001/message/${ctx.query.id}`)
    .then((res) => res.json())
    .then(({ body: messages }) => {
      return { messages }
    })
}

export default ChatMessages
