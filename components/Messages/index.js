import { useEffect, useState } from 'react'
import styles from './styles'

const Messages = ({ userId, chatId }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (chatId || userId) {
      fetch(`https://megabyte-chat-be.herokuapp.com/message/${chatId}`)
        .then((res) => res.json())
        .then(({ body: chatMessages }) => {
          setMessages(chatMessages)
        })
    }
  }, [chatId, userId])

  return (
    <>
      <div>
        {messages.map((message) => {
          return (
            <article
              key={message._id}
              received={message.user === userId ? 1 : 0}
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
