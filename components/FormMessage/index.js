import styles from './styles'
import { MdSend } from 'react-icons/md'

const FormMessage = () => {
  return (
    <>
      <form>
        <input
          type='text'
          name='message'
          id='message'
          placeholder='Escribe tu mensaje'
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
