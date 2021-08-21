import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import styles from './styles'

const Chat = ({ chats, userId }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const chatsUsers = chats.map((chat) => {
      const chatReceptor = chat.users.filter((user) => {
        let userItem = {} // Para que el lint no diera problemas al no retornar nada del filter
        if (user._id !== userId) {
          userItem = user
        }
        return userItem
      })
      return chatReceptor[0]
    })
    setUsers(chatsUsers)
  }, [])

  return (
    <>
      <Head>
        <title>Megabyte Chat - Chats</title>
      </Head>
      <Layout>
        <ul>
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user._id}>
                <Link href='/'>
                  <a>{user.name}</a>
                </Link>
              </li>
            ))
          ) : (
            <p>No se encontraron chats. Crea uno nuevo</p>
          )}
        </ul>
      </Layout>
      <style jsx>{styles}</style>
    </>
  )
}

Chat.getInitialProps = (ctx) => {
  const userId = ctx.query.id
  return fetch(`http://localhost:3001/chat/${userId}`)
    .then((res) => res.json())
    .then(({ body: chats }) => {
      return { chats, userId }
    })
}

export default Chat
