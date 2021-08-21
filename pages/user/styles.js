import { css } from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
  ul {
    width: 100%;
    max-width: 300px;
    height: 130px;
    overflow-y: auto;
  }

  li {
    height: 30px;
    display: flex;
    align-items: center;
  }

  p {
    color: ${colors.primary};
    font-size: 1.4rem;
  }
`
