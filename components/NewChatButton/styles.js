import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
  button {
    display: block;
    background: white;
    font-size: 2rem;
    color: ${colors.secondary};
    margin-top: 5px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.4s;
  }

  button:hover {
    font-size: 2.3rem;
  }
`
