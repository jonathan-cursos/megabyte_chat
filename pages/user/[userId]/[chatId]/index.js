import { useEffect, useState } from 'react'
import router from 'next/router'
import Layout from '../../../../components/Layout'
import Messages from '../../../../components/Messages'

const ChatMessages = () => {
  const [ids, setIds] = useState('')
  useEffect(() => {
    // Sí no almacenamos el id en una variable, no podemos pasarlo por props
    setIds({
      userId: router.query.userId,
      chatId: router.query.chatId
    })
  }, [])
  return (
    <>
      <Layout>
        <Messages ids={ids} />
      </Layout>
    </>
  )
}

export default ChatMessages
