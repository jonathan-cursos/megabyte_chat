import { useEffect, useState } from 'react'
import styles from './styles'

const Messages = ({ ids }) => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    if (ids) {
      fetch(`http://localhost:3001/message/${ids.chatId}`)
        .then((res) => res.json())
        .then(({ body: chatMessages }) => {
          setMessages(chatMessages)
        })
    }
  }, [ids])

  return (
    <>
      {console.log(messages)}
      <div>
        {messages.map((message) => {
          return (
            <article
              key={message._id}
              received={message.user === ids.userId ? 1 : 0}
            >
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
