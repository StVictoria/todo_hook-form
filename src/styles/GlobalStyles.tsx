import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    min-width: 100wv;
    min-height: 100vh;
    color: white;
    font-family: Arial;
    background-color: #011d29;
    padding-top: 20px;
    letter-spacing: 1px;
    box-sizing: border-box;
  }

  input, button {
      outline: none;
      letter-spacing: 1px;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h2 {
    text-align: center;
    font-size: 16px;
    margin-bottom: 50px;
  }
`;

export default GlobalStyles;