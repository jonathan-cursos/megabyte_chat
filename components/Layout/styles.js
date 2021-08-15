import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css.global`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Padauk', sans-serif;
  }

  body {
    background-color: ${colors.bg};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ul,
  ol {
    list-style: none;
  }
`
