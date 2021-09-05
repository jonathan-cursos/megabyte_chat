import { useState } from 'react'
import { MdSend } from 'react-icons/md'
import styles from './styles'
import { LOCAL_SRV, WS_SRV } from '../../config'
import socketIOClient from 'socket.io-client'

const FormMessage = ({ socket, chat, user }) => {
  const [messageField, setMessageField] = useState('')

  const handleChange = (event) => {
    setMessageField(event.target.value)
  }

  const handleSubmit = (messageField) => {
    socket.emit('sendMessage', {
      user: user,
      content: messageField,
      chat: chat
    })
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(messageField)
          setMessageField('')
        }}
      >
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
    </div>
  )
}

export default FormMessage
