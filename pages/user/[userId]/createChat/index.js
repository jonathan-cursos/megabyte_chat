import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { API } from '../../../../config'
import Head from 'next/head'

const createChat = ({ users }) => {
  const [validUsers, setValidUsers] = useState([])
  const router = useRouter()

  useEffect(async () => {
    const chatsRes = await fetch(
      `${API}/chat/${router.query.userId}?populate=pop`
    )
    const { body: chats } = await chatsRes.json()
    const usersWithChat = chats
      .map((chat) => {
        return chat.users.map((user) => user)
      })
      .flat()

    const newUsers = users.filter((user) => !usersWithChat.includes(user._id))
    setValidUsers(newUsers)
  }, [router, users])

  const handleCreateChat = async (event) => {
    await fetch(`${API}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users: [router.query.userId, event.target.id]
      })
    })
    router.push(`/user/${router.query.userId}`)
  }

  return (
    <>
      <Head>
        <title>Megabyte Chat - Nuevo chat</title>
      </Head>
      <div>
        <p>Indica el usuario con el que iniciaras un chat</p>
        <ul>
          {validUsers.map((user) => {
            return (
              <button
                type='button'
                key={user._id}
                id={user._id}
                onClick={handleCreateChat}
              >
                {user.name}
              </button>
            )
          })}
        </ul>
      </div>
      <style jsx>{`
        button {
          display: block;
          margin: 10px 0;
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = () => {
  return fetch(`${API}/user/`)
    .then((res) => res.json())
    .then(({ body: users }) => {
      return { props: { users } }
    })
}

export default createChat
