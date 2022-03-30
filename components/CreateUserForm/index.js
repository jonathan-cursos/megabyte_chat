import { useRouter } from 'next/router'
import { API } from '../../config'
import { useForm } from 'react-hook-form'
import styles from './styles'

const CreateUserForm = () => {
  const router = useRouter()
  const { handleSubmit, register } = useForm()

  const onSubmit = async (values) => {
    await fetch(`${API}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.name,
        phone: values.phone
      })
    })
    router.push('/user')
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Nombre:</p>
          <input type='text' {...register('name', { required: true })} />
        </label>
        <label>
          <p>Telefono:</p>
          <input
            type='tel'
            placeholder='8888-8888'
            pattern='[0-9]{4}-[0-9]{4}'
            {...register('phone', { required: true })}
          />
        </label>
        <button type='submit'>Crear</button>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default CreateUserForm
