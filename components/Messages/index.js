import { useEffect, useState, useRef } from 'react'
import Loader from '../Loader'
import styles from './styles'

const Messages = ({ socket, user, chat }) => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const chatElement = useRef(null)

  useEffect(() => {
    if (socket) {
      socket.emit('chatId', chat)
      setLoading(true)
      socket.on('chatId', (data) => {
        setLoading(false)
        setMessages(data)
        chatElement.current.scroll(0, chatElement.current.scrollHeight)
      })
      socket.on('addedMessage', (data) => {
        setMessages(data)
        chatElement.current.scroll(0, chatElement.current.scrollHeight)
      })
    }
  }, [socket])

  return (
    <>
      <ul ref={chatElement}>
        {loading && <Loader />}
        {messages.map((message) => {
          const received = message.user === user ? 1 : 0
          return (
            <li key={message._id}>
              <article received={received}>
                <p>{message.content}</p>
                <span>{message.date}</span>
              </article>
            </li>
          )
        })}
      </ul>
      <style jsx>{styles}</style>
    </>
  )
}

export default Messages
