import { useState } from 'react'
import { MdSend } from 'react-icons/md'
import styles from './styles'
import { LOCAL_SRV, WS_SRV } from '../../config'
import socketIOClient from 'socket.io-client'

const FormMessage = ({ userId, chatId }) => {
  const [messageField, setMessageField] = useState('')
  const [socket, setSocket] = useState(socketIOClient(WS_SRV))

  const handleChange = (event) => {
    setMessageField(event.target.value)
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   await fetch(`${LOCAL_SRV}/message/`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       user: userId,
  //       content: messageField,
  //       chat: chatId
  //     })
  //   })
  //   setMessageField('')
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    socket.emit('sendMessage', {
      user: userId,
      content: messageField,
      chat: chatId
    })
  }

  return (
    <div>
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
    </div>
  )
}

export default FormMessage
