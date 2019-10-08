import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  h1 {
    font-family: "Londrina Solid", sans-serif;
  }
  body > * {
    font-family: "Source Sans", sans-serif;
  }
  p {
    font-family: "Source Sans", sans-serif;
  }
`;

export default GlobalStyle;
