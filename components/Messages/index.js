import { useEffect, useState } from 'react'
import styles from './styles'

const Messages = ({ chatId }) => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    if (chatId) {
      fetch(`http://localhost:3001/message/${chatId}`)
        .then((res) => res.json())
        .then(({ body: chatMessages }) => {
          setMessages(chatMessages)
        })
    }
  }, [chatId])

  return (
    <>
      <div>
        {messages.map((message) => {
          const received = 0
          return (
            <article key={message._id} received={received}>
              <p>{message.content}</p>
              <span>{message.date}</span>
            </article>
          )
        })}
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Messages
