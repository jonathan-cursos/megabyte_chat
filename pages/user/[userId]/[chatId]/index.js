import { useEffect, useState } from 'react'
import Head from 'next/head'
import io from 'socket.io-client'
import Messages from '../../../../components/Messages'
import FormMessage from '../../../../components/FormMessage'
import { WS_SRV } from '../../../../config'

const ChatMessages = ({ user, chat }) => {
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
      <Messages socket={socket} user={user} chat={chat} />
      <FormMessage socket={socket} user={user} chat={chat} />
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
