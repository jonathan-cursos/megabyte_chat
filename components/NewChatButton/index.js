import { API } from '../../config'
import { useRouter } from 'next/router'
import styles from './styles'

const NewChatButton = ({ user, chatCreator, name }) => {
  const router = useRouter()

  const handleCreateChat = async (event) => {
    await fetch(`${API}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users: [chatCreator, event.target.id]
      })
    })
    router.push(`/user/${chatCreator}`)
  }

  return (
    <>
      <button type='button' id={user} onClick={handleCreateChat}>
        {name}
      </button>
      <style jsx>{styles}</style>
    </>
  )
}

export default NewChatButton
