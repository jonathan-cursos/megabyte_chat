import css from 'styled-jsx/css'
import { colors, boxShadow } from '../../styles/theme'

export default css`
  div {
    overflow-y: auto;
    min-height: 150px;
    height: 73%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    box-shadow: ${boxShadow};
    padding: 5px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */ /*Fondo del scroll*/
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #d4d4d4;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.secondary};
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
