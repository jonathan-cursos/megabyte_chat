import { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import io from 'socket.io-client'
import Messages from '../../../../components/Messages'
import FormMessage from '../../../../components/FormMessage'
import { colors, boxShadow } from '../../../../styles/theme'
import { WS_SRV } from '../../../../config'

const ChatMessages = ({ user, chat }) => {
  const [messages, setMessages] = useState([])
  const chatElement = useRef(null)
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io(WS_SRV)
    setSocket(newSocket)
    return () => newSocket.close()
  }, [setSocket])

  useEffect(() => {
    if (socket) {
      socket.emit('chatId', chat)
      socket.on('chatId', (data) => {
        // console.log(data)
        setMessages(data)
        chatElement.current.scroll(0, chatElement.current.scrollHeight)
      })
      socket.on('addedMessage', (data) => {
        setMessages(data)
        chatElement.current.scroll(0, chatElement.current.scrollHeight)
      })
    }
  }, [socket])

  const handleSubmit = (messageField) => {
    socket.emit('sendMessage', {
      user: user,
      content: messageField,
      chat: chat
    })
    socket.on('addedMessage', (data) => {
      setMessages(data)
      chatElement.current.scroll(0, chatElement.current.scrollHeight)
    })
  }

  return (
    <>
      <Head>
        <title>Megabyte Chat - Mensajes</title>
      </Head>
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
