import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'
import Messages from '../../../../components/Messages'
import FormMessage from '../../../../components/FormMessage'

const ChatMessages = () => {
  const [userId, setUserId] = useState('')
  const [chatId, setChatId] = useState('')
  const router = useRouter()

  useEffect(() => {
    //Sí no almacenamos el id en una variable, no podemos pasarlo por props
    //Hay que escuchar cambios del router, sino, estará vacío en la 1er vuelta
    setUserId(router.query.userId)
    setChatId(router.query.chatId)
  }, [router])
  return (
    <>
      <Layout>
        <Messages userId={userId} chatId={chatId} />
        <FormMessage />
      </Layout>
    </>
  )
}

export default ChatMessages
