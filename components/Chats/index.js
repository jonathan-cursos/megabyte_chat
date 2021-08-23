import Link from 'next/link'
import styles from './styles'

const Chats = ({ userName, chatId, userId }) => {
  return (
    <>
      <Link href={`/user/${userId}/${chatId}`}>
        <a>{userName}</a>
      </Link>
      <style jsx>{styles}</style>
    </>
  )
}

export default Chats
