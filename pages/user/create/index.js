import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import useField from '../../../hooks/useField'
import { LOCAL_SRV } from '../../../config'

const CreateUser = () => {
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
    await fetch(`${LOCAL_SRV}/user`, {
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
    <Layout>
      <h2>Ingresa los datos del nuevo usuario</h2>
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
      <style jsx>{`
        input {
          width: 100%;
          padding: 5px;
        }

        p {
          font-size: 1.5rem;
        }

        button {
          width: 100%;
          margin-top: 20px;
          padding: 5px 0;
          border-radius: 5px;
          display: block;
          font-size: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default CreateUser
