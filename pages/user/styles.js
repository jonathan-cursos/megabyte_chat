import { css } from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
  ul {
    width: 100%;
    max-width: 300px;
    height: 130px;
    overflow-y: auto;
  }

  p {
    color: ${colors.primary};
    font-size: 1.4rem;
  }
`
