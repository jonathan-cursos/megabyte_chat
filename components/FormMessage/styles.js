import css from 'styled-jsx/css'
import { colors, boxShadow, fontFamily } from '../../styles/theme'

export default css`
  div {
    min-height: 45px;
    /* position: absolute; */
    margin-top: 15px;
    bottom: 10px;
    width: 100%;
  }
  form {
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    border-radius: 20px;
    box-shadow: ${boxShadow};
    position: relative;
    width: 100%;
    height: 100%;
  }

  input {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: none;
    position: absolute;
    padding: 0 50px 0 10px;
    outline: none;
    font-family: ${fontFamily};
  }

  button {
    width: 45px;
    height: 100%;
    border-radius: 50%;
    background-color: ${colors.secondary};
    border: none;
    color: white;
    position: absolute;
    right: -3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`
