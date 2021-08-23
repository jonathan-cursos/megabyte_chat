import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
  div {
    overflow-y: auto;
    border: 1px solid black;
    min-height: 150px;
    height: 73%;
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
    border-radius: 10px 0 10px 10px;
    width: 50%;
    position: relative;
  }

  article[received='0'] {
    background-color: gray;
    color: black;
  }

  span {
    font-size: 1rem;
    position: absolute;
    bottom: 2px;
    right: 10px;
  }
`
