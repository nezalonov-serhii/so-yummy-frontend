import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    ${({ darkThem }) => {
       console.log(darkThem);
       if (darkThem) {
          return `
      --text-primary: #FAFAFA;
      --text-secondary: #FAFAFA;
      --text-third: rgba(250, 250, 250, 0.5);
      --text-light: #FAFAFA;
      --text-other: #FAFAFA;
      --text-dark: #3E4462;

      --accent-color: #8BAA36;
      --title: #FAFAFA;
      --central-point-title: #FAFAFA;


      --background-primary: #1E1F28;
      --background-secondary: #2A2C36;
      --background-footer: #8BAA36;
      --background-modal: #2A2C36;

      --background-recipe-card: #2A2C36;
      --text-recipe-card: rgba(250, 250, 250, 0.60);

      --background-ingredient-card: #EBF3D4;
      --text-ingredient-card: #23262A;

      --button-background-primary: #8BAA36;
      --button-background-secondary: #8BAA36;
      --button-background-other: #1E1F28;
      
      --social-icon: #FAFAFA;
      --social-icon-hover: #1E1F28;

      --toggle-them: #8BAA36;

      --navlink-hover: #1E1F28;
    `;
       } else {
          return `
      --text-primary: #3E4462;
      --text-secondary: #23262A;
      --text-third: rgba(0, 0, 0, 0.5);
      --text-light: #FAFAFA;
      --text-other: #000000;
      --text-dark: #3E4462;

      --accent-color: #8BAA36;
      --title: #001833;
      --central-point-title: #22252A;
      
      --background-primary: #FAFAFA;
      --background-secondary: #FFFFFF;
      --background-footer: #22252A;
      --background-modal: #2A2C36;

      --background-recipe-card: #FFF;
      --text-recipe-card: #23262A;


      --background-ingredient-card: #2A2C36;
      --text-ingredient-card: #23262A;

      --button-background-primary: #8BAA36;
      --button-background-secondary: #22252A;
      --button-background-other: #8BAA36;

      --social-icon: #8BAA36;
      --social-icon-hover: #FAFAFA;

      --toggle-them: #FAFAFA;

      --navlink-hover: #8BAA36;
    `;
       }
    }}

    --cubic-bezier: cubic-bezier(0.4, 0, 0.2, 1);
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;

        transition: color 250ms var(--cubic-bezier),
            background-color 250ms var(--cubic-bezier);
  }

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    background-color: var(--background-primary);
  }

  main {
    min-height: 100vh;
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
