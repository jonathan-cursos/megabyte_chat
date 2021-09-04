import css from 'styled-jsx/css'
import { colors, fontFamily } from '../../styles/theme'

export const globals = css.global`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: ${fontFamily};
  }

  body {
    background-color: #f9f9f9;
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

  input {
    outline: none;
    font-family: ${fontFamily};
  }

  button {
    background-color: ${colors.secondary};
    color: white;
    border: none;
    font-family: ${fontFamily};
  }
`

export default css`
  header {
    color: ${colors.primary};
    padding-bottom: 10px;
  }

  h1 {
    font-size: 2.5rem;
    letter-spacing: 1rem;
    font-weight: 600;
    text-align: center;
  }
  div {
    background-color: white;
    height: 100%;
    /* max-height: 300px; */
    width: 100%;
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 500px) {
    h1 {
      font-size: 3.5rem;
    }

    div {
      max-height: 800px;
      height: 100%;
      height: 800px;
      width: 500px;
      position: relative;
    }

    main {
      background-color: ${colors.secondary};
    }
  }
`
