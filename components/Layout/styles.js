import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export const styles = css`
  header {
    color: ${colors.primary};
    padding-bottom: 20px;
  }

  h1 {
    font-size: 2.5rem;
    letter-spacing: 1rem;
    text-align: center;
  }
`

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
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  main {
    width: 100vw;
    height: 200px;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    background: ${colors.secondary};
  }

  ul,
  ol {
    list-style: none;
  }
`
