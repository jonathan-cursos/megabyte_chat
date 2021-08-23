import { useEffect, useState } from 'react'
import router from 'next/router'
import Layout from '../../../components/Layout'
import Messages from '../../../components/Messages'

const ChatMessages = () => {
  const [chatId, setChatId] = useState('')
  useEffect(() => {
    // Sí no almacenamos el id en una variable, no podemos pasarlo por props
    setChatId(router.query.id)
  })
  return (
    <>
      <Layout>
        <Messages chatId={chatId} />
      </Layout>
    </>
  )
}

export default ChatMessages
