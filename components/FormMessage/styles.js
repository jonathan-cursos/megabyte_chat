import css from 'styled-jsx/css'
import { colors, boxShadow, fontFamily } from '../../styles/theme'

export default css`
  div {
    min-height: 50px;
    margin-top: 15px;
    bottom: 10px;
    width: 100%;
  }
  form {
    box-shadow: ${boxShadow};
    position: relative;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 100px;
  }

  input {
    width: 100%;
    height: 100%;
    border-radius: 100px;
    border: none;
    position: absolute;
    padding: 0 60px 0 20px;
    font-family: ${fontFamily};
  }

  button {
    width: 50px;
    height: 100%;
    border-radius: 50%;
    background-color: ${colors.secondary};
    border: none;
    color: white;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`
