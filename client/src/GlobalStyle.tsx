import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --green: #41A58D;
    --dark-green: #276955;
    --deep-green: #133027;
    --black: #000000;
    --white: #ffffff;
    --blue: #6675FF;
    --red: #FF6363;
    --gray: #999;

    --width: 1200px;
    --s-width: 640px;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';}
  a { cursor: pointer; text-decoration: none; }
  h1, h2, h3, ol, ul, dl, dt, dd { margin: 0; padding: 0; }
  ol, ul { list-style: none; }

  .layout {
    max-width: 1440px;
    padding: 0 24px;
    margin: auto;
  }
`;