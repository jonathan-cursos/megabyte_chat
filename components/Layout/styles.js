import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export const globals = css.global`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Hind Siliguri', sans-serif;
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
`

export default css`
  header {
    color: ${colors.primary};
    padding-bottom: 10px;
  }

  h1 {
    font-size: 3.5rem;
    letter-spacing: 1rem;
    font-weight: 600;
    text-align: center;
  }
  div {
    background-color: white;
    height: 100%;
    width: 100%;
    padding: 60px 25px 10px;
  }

  @media (min-width: 500px) {
    div {
      height: 90%;
      width: 500px;
    }

    main {
      background-color: ${colors.secondary};
    }
  }
`
