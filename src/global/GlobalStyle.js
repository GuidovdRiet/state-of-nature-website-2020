import { withTheme, createGlobalStyle } from "styled-components";

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
  body {
    background-color: ${({ theme }) => theme.pink};
  }
`;

export default withTheme(GlobalStyle);
