import Head from 'next/head'
import CreateUserForm from '../../../components/CreateUserForm'

const CreateUser = () => {
  return (
    <>
      <Head>
        <title>Megabyte Chat - Crear usuario</title>
      </Head>
      <h2>Ingresa los datos del nuevo usuario</h2>
      <CreateUserForm />
    </>
  )
}

export default CreateUser
