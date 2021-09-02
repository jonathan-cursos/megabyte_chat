import { useEffect, useState, useRef } from 'react'
import Layout from '../../../../components/Layout'
import Messages from '../../../../components/Messages'
import FormMessage from '../../../../components/FormMessage'
import { colors, boxShadow } from '../../../../styles/theme'
import socketIOClient from 'socket.io-client'
import { API, LOCAL_SRV, WS_SRV } from '../../../../config'

const ChatMessages = ({ user, chat }) => {
  const [messages, setMessages] = useState([])
  const chatElement = useRef(null)
  const socket = socketIOClient(WS_SRV)

  useEffect(() => {
    console.log({
      user: user,
      chat: chat
    })
    socket.emit('chatId', chat)
    socket.on('chatId', (data) => {
      // console.log(data)
      setMessages(data)
    })
  }, [])

  // useEffect(() => {
  //   if (userId || chatId) {
  //     console.log('a')
  //     socket.on('addedMessage', (data) => {
  //       setMessages(data)
  //     })
  //   }
  // }, [chatId, userId])

  // useEffect(() => {
  //   if (messages.length > 0) {
  //     chatElement.current.scroll(0, chatElement.current.scrollHeight)
  //   }
  // }, [messages])

  const handleSubmit = (messageField) => {
    // socket.emit('sendMessage', {
    //   user: userId,
    //   content: messageField,
    //   chat: chatId
    // })
  }

  return (
    <>
      <Layout>
        <ul ref={chatElement}>
          {messages.map((message) => {
            const received = message.user === user ? 1 : 0
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
          overflow-y: scroll;
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

export const getServerSideProps = (ctx) => {
  const { params } = ctx
  const { userId, chatId } = params
  return {
    props: {
      user: userId,
      chat: chatId
    }
  }
}

export default ChatMessages
