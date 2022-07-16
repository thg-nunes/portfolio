import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* essa estilização na media-screen diminui a font de 16px(padrão) para 15px e 14px respectivamente */
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    color: ${({theme}) => theme.font.colors.white200};
    background: ${({theme}) => theme.colors.background.gray700};
  }

  /* essa estilização é feita pelo fato de cada um desses elementos "não respeitaram" a font definida na aplicação,
    então "obrigo" cada um a usar a font escolhida
  */
  body, input, textarea, select, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  nav ul li {
    list-style: none;
  }
`
