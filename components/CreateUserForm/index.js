import { useRouter } from 'next/router'
import { API } from '../../config'
import { useForm } from 'react-hook-form'
import styles from './styles'
import FETCH_STATES from '../../fetchStates'
import { useState } from 'react'

const CreateUserForm = () => {
  const router = useRouter()
  const [fetchState, setFetchState] = useState(FETCH_STATES.INITIAL)
  const { handleSubmit, register } = useForm()

  const onSubmit = async (values) => {
    setFetchState(FETCH_STATES.LOADING)
    try {
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
      setFetchState(FETCH_STATES.COMPLETE)
      router.push('/user')
    } catch (error) {
      setFetchState(error)
    }
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
        <button type='submit' disabled={fetchState === FETCH_STATES.LOADING}>
          Crear
        </button>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default CreateUserForm
