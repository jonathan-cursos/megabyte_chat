import { useRouter } from 'next/router'
import useField from '../../hooks/useField'
import { API } from '../../config'
import styles from './styles'

const CreateUserForm = () => {
  const router = useRouter()
  const nameField = useField({
    type: 'text',
    name: 'name',
    required: true
  })

  const phoneField = useField({
    type: 'number',
    name: 'name',
    required: true
  })
  const handleSubmit = async (event) => {
    event.preventDefault()
    await fetch(`${API}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameField.value,
        phone: phoneField.value
      })
    })
    router.push('/user')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nombre:</p>
          <input {...nameField} />
        </label>
        <label>
          <p>Telefono:</p>
          <input {...phoneField} />
        </label>
        <button type='submit'>Crear</button>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default CreateUserForm
