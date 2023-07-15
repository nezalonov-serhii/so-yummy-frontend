import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* White mode*/
    --text-primary: #3E4462;
    --text-secondary: #23262A;
    --text-third: rgba(0, 0, 0, 0.5);
    --text-light: #FAFAFA;

    --accent-color: #8BAA36;

    --title: #001833;

    --background-primary: #FAFAFA;
    --background-secondary: #FFFFFF;
    --background-footer: #22252A;
    --background-modal: #2A2C36;

    --button-background-primary: #8BAA36;
    --button-background-secondary: #22252A;

    /* Dark mode*/
    --dark-text-primary: #FAFAFA;
    --dark-text-secondary: #FAFAFA;
    --dark-text-third: rgba(250, 250, 250, 0.5);

    --dark-title: #FAFAFA;

    --dark-background-primary: #1E1F28;
    --dark-background-secondary: #2A2C36;
    --dark-background-footer: #8BAA36;

    --button-dark-background-primary: #8BAA36;
    --button-dark-background-secondary: #8BAA36;

    /*Transition*/
    --cubic-bezier: cubic-bezier(0.4, 0, 0.2, 1);
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    background-color: var(--background-primary);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    display: block;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
