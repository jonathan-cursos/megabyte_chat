import Link from 'next/link'
import styles from './styles'

const Users = ({ name, id }) => {
  return (
    <>
        <Link href={`/chat/${id}`}>
          <a>{name}</a>
        </Link>
      <style jsx>{styles}</style>
    </>
  )
}

export default Users
