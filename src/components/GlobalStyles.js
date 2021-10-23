import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Montserrat;
    overflow-x: hidden;
    transition: all 1s ease;
    p {
    }
  }
`

export default GlobalStyles
