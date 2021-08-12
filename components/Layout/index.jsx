import styles from './styles'

const Layout = ({ children }) => {
  return (
    <main>
      {children}
      <style jsx global>
        {styles}
      </style>
    </main>
  )
}

export default Layout
