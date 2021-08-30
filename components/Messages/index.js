import { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import styles from './styles'
import { API, LOCAL_SRV, WS_SRV } from '../../config'

const Messages = ({ content, date, id, received }) => {
  // const [messages, setMessages] = useState([])
  // const [socket, setSocket] = useState(socketIOClient(WS_SRV))

  // useEffect(() => {
  //   if (chatId || userId) {
  //     fetch(`${LOCAL_SRV}/message/${chatId}`)
  //       .then((res) => res.json())
  //       .then(({ body: chatMessages }) => {
  //         setMessages(chatMessages)
  //       })
  //   }
  // }, [chatId, userId])

  // useEffect(() => {
  //   if (userId || chatId) {
  //     socket.emit('chatId', chatId)
  //     socket.on('chatId', (data) => {
  //       setMessages(data)
  //     })
  //   }
  // }, [userId, chatId])

  return (
    <>
      <article received={received}>
        <p>{content}</p>
        <span>{date}</span>
      </article>
      <style jsx>{styles}</style>
    </>
  )
}

export default Messages
