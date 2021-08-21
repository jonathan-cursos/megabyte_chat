import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
  li {
    height: 30px;
    display: flex;
    align-items: center;
  }

  a {
    color: ${colors.primary};
    font-size: 1.7rem;
  }
`
