import { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import styles from './styles'
import { API, LOCAL_SRV, WS_SRV } from '../../config'

const Messages = ({ userId, chatId }) => {
  const [messages, setMessages] = useState([])
  const [socket, setSocket] = useState(socketIOClient(WS_SRV))

  // useEffect(() => {
  //   if (chatId || userId) {
  //     fetch(`${LOCAL_SRV}/message/${chatId}`)
  //       .then((res) => res.json())
  //       .then(({ body: chatMessages }) => {
  //         setMessages(chatMessages)
  //       })
  //   }
  // }, [chatId, userId])

  useEffect(() => {
    if (userId || chatId) {
      socket.emit('chatId', chatId)
      socket.on('chatId', (data) => {
        setMessages(data)
      })
    }
  }, [userId, chatId])

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
