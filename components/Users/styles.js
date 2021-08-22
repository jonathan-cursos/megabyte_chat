import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
  a {
    color: ${colors.secondary};
    font-size: 2.1rem;
    text-decoration: none;
    transition: 0.4s;
  }

  a:hover {
    font-size: 2.3rem;
  }
`
