import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'
import { API, LOCAL_SRV } from '../../../../config'
const createChat = ({ users }) => {
  const [validUsers, setValidUsers] = useState([])
  const router = useRouter()

  useEffect(async () => {
    const chatsRes = await fetch(
      `${LOCAL_SRV}/chat/${router.query.userId}?populate=pop`
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
    await fetch(`${LOCAL_SRV}/chat`, {
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
      <Layout>
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
      </Layout>
      <style jsx>{`
        button {
          display: block;
          margin: 10px 0;
        }
      `}</style>
    </>
  )
}

createChat.getInitialProps = (ctx) => {
  return fetch(`${LOCAL_SRV}/user/`)
    .then((res) => res.json())
    .then(({ body: users }) => {
      return { users }
    })
}

export default createChat
