import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    min-width: 100wv;
    min-height: 100vh;
    color: white;
    background-color: #012737;
    padding-top: 20px;
  }

  input, button {
      outline: none;
  }
`;

export default GlobalStyles;