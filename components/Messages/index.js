import { useEffect, useState } from 'react'
import styles from './styles'

const Messages = ({ ids }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    console.log(ids)
    if (ids[0] !== undefined) {
      fetch(`http://localhost:3001/message/${ids[1]}`)
        .then((res) => res.json())
        .then(({ body: chatMessages }) => {
          setMessages(chatMessages)
        })
    }
  }, [ids])

  return (
    <>
      <div>
        {messages.map((message) => {
          return (
            <article
              key={message._id}
              received={message.user === ids[0] ? 1 : 0}
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
