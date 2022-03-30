import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import io from 'socket.io-client'
import Messages from '../../../../components/Messages'
import FormMessage from '../../../../components/FormMessage'
import { WS_SRV } from '../../../../config'

const ChatMessages = () => {
  const router = useRouter()
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io(WS_SRV)
    setSocket(newSocket)

    return () => newSocket.close()
  }, [setSocket])

  return (
    <>
      <Head>
        <title>Megabyte Chat - Mensajes</title>
      </Head>
      <Messages
        socket={socket}
        user={router.query.userId}
        chat={router.query.chatId}
      />
      <FormMessage
        socket={socket}
        user={router.query.userId}
        chat={router.query.chatId}
      />
    </>
  )
}

export default ChatMessages
