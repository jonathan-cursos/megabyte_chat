import styles from './styles'

const NewChatButton = ({ user, chatCreator, name, handleCreateChat }) => {
  return (
    <>
      <button
        type='button'
        id={user}
        onClick={(event) => handleCreateChat(chatCreator, event.target.id)}
      >
        {name}
      </button>
      <style jsx>{styles}</style>
    </>
  )
}

export default NewChatButton
