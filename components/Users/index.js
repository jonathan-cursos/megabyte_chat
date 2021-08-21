import Link from 'next/link'
import styles from './styles'

const Users = ({ name, key, id }) => {
  return (
    <>
      <li>
        <Link href={`/user/${id}`}>
          <a>{name}</a>
        </Link>
      </li>
      <style jsx>{styles}</style>
    </>
  )
}

export default Users
