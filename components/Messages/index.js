import { useEffect, useState } from 'react'

const Messages = ({ chatId }) => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/message/${chatId}`)
      .then((res) => res.json())
      .then(({ body: chatMessages }) => {
        setMessages(chatMessages)
      })
  }, [])

  return (
    <>
      {messages.map((message) => (
        <article key={message._id}>
          <p>{message.content}</p>
          <p>{message.date}</p>
        </article>
      ))}
    </>
  )
}

export default Messages
