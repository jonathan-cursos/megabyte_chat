import styles from './styles'
import { MdSend } from 'react-icons/md'
import { useState } from 'react'

const FormMessage = ({ userId, chatId }) => {
  const [messageField, setMessageField] = useState('')

  const handleChange = (event) => {
    setMessageField(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await fetch('http://localhost:3001/message/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: userId,
        content: messageField,
        chat: chatId
      })
    })
    setMessageField('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='message'
          id='message'
          placeholder='Ingresa un mensaje'
          value={messageField}
          onChange={handleChange}
          required
        />
        <button type='submit'>
          <MdSend />
        </button>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default FormMessage
