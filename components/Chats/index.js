import Link from 'next/link'
import styles from './styles'

const Chats = ({ userName, chatId }) => {
  return (
    <>
      <Link href={`/messages/${chatId}`}>
        <a>{userName}</a>
      </Link>
      <style jsx>{styles}</style>
    </>
  )
}

export default Chats
