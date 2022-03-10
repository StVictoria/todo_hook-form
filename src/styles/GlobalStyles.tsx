import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    padding-top: 20px;
  }

  input, button {
      outline: none;
  }
`;

export default GlobalStyles;