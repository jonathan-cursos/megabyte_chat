import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'
import Messages from '../../../../components/Messages'
import FormMessage from '../../../../components/FormMessage'
import { colors, boxShadow } from '../../../../styles/theme'
import socketIOClient from 'socket.io-client'
import { API, LOCAL_SRV, WS_SRV } from '../../../../config'

const ChatMessages = () => {
  const [userId, setUserId] = useState('')
  const [chatId, setChatId] = useState('')
  const [messages, setMessages] = useState([])
  const [socket, setSocket] = useState(socketIOClient(WS_SRV))
  const router = useRouter()

  useEffect(() => {
    setUserId(router.query.userId)
    setChatId(router.query.chatId)
  }, [router])

  useEffect(() => {
    if (userId || chatId) {
      socket.emit('chatId', chatId)
      socket.on('chatId', (data) => {
        setMessages(data)
      })
    }
  }, [userId, chatId])

  const handleSubmit = (messageField) => {
    socket.emit('sendMessage', {
      user: userId,
      content: messageField,
      chat: chatId
    })
  }
  return (
    <>
      <Layout>
        <ul>
          {messages.map((message) => {
            const received = message.user === userId ? 1 : 0
            return (
              <li key={message._id}>
                <Messages
                  content={message.content}
                  date={message.date}
                  id={message._id}
                  received={received}
                />
              </li>
            )
          })}
        </ul>
        <FormMessage handleSubmit={handleSubmit} />
      </Layout>
      <style jsx>{`
        ul {
          overflow-y: auto;
          min-height: 150px;
          height: 73%;
          box-shadow: ${boxShadow};
          padding: 5px;
        }

        li {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        /* width */
        ::-webkit-scrollbar {
          width: 5px;
        }

        /* Track */ /*Fondo del scroll*/
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #d4d4d4;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: ${colors.secondary};
        }
      `}</style>
    </>
  )
}

export default ChatMessages
