import css from 'styled-jsx/css'
import { colors, boxShadow } from '../../styles/theme'

export default css`
  ul {
    overflow-y: scroll;
    min-height: 200px;
    max-height: 400px;
    box-shadow: ${boxShadow};
    padding: 15px;
  }

  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  article {
    color: white;
    background-color: ${colors.secondary};
    margin-bottom: 10px;
    padding: 15px 15px 25px;
    font-size: 1.4rem;
    font-weight: 600;
    border-radius: 10px 10px 0 10px;
    width: 50%;
    position: relative;
  }

  article[received='0'] {
    align-self: flex-start;
    border-radius: 0 10px 10px 10px;
    background-color: #b9b9b9;
    color: black;
  }

  span {
    font-size: 1rem;
    position: absolute;
    bottom: 2px;
    right: 10px;
  }
`
