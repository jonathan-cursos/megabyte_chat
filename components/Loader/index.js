import styles from './styles'

const Loader = () => {
  return (
    <>
      <p>Por favor espere, esto puede tardar un momento.</p>
      <div className='loader__container'>
        <div className='lds-roller'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Loader
