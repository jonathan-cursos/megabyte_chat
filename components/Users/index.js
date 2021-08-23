import Link from 'next/link'
import styles from './styles'

const Users = ({ name, id }) => {
  return (
    <>
      <Link href={`/user/${id}`}>
        <a>{name}</a>
      </Link>
      <style jsx>{styles}</style>
    </>
  )
}

export default Users
