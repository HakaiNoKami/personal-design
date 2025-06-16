import { createGlobalStyle, css } from "styled-components";

const BaseGlobalStyle = css`
  :root {
    font-size: 62.5%;
  }

  #modal:has(div) ~ #root {
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: "Archivo", -apple-system, BlinkMacSystemFont, sans-serif;

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar {
      width: 1.2rem;
      height: 1.2rem;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      border: 0.3rem solid transparent;
      background-color: transparent;
      background-clip: content-box;
    }

    &:hover {
      ::-webkit-scrollbar-thumb {
        background-color: var(--text);
      }
    }
  }

  body {
    color: var(--text);
    background: var(--neutral);
  }

  #root {
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  p,
  span,
  a,
  th,
  td,
  button {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  small {
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: 0.15em;
    font-weight: 600;
    color: var(--neutral-400);

    &.uppercase {
      text-transform: uppercase;
    }
  }

  svg {
    display: block;
  }

  h3 {
    font-size: 2rem;
    line-height: 3rem;
    color: var(--text-title);
  }

  a {
    &:focus-visible {
      outline: 0.2rem auto var(--gray);
    }
  }

  .text-center {
    text-align: center !important;

    svg {
      display: inline-block;
    }
  }

  .nowrap {
    white-space: nowrap;
  }

  @media print {
    html,
    body {
      height: initial !important;
      overflow: initial !important;
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }

    @page {
      size: auto;
      margin: 15mm 10mm;
    }
  }
`;

export const LightGlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF; 
    --balck: #000000; 
    --gray: #DADCE3;
    --blue: #4d70ff;
    --red: #F9675B;
    --green: #38B878;
    --yellow: #F9D65B;
    --cyan: #1c9ab5;
    --orange: #F9A75B;
    
    --neutral: #F3F5F9;
    --neutral-400: #979AA5;
    --neutral-600: #5A5D68;

    --blue-dark-500:#3366FF;
    --blue-dark-600: #254EDB;
    --blue-dark-800: #102693;

    --blue-light-200: #ADC8FF;
    --blue-light-400: #D6E4FF;
    --blue-light-500: #3366FF;

    --red-light-100: #FAE0D2;
    --red-light-600:  #871821;
    --red-light-800: #5B0A1F;
    
    --green-light-100: #E3F8CC;
    --green-light-200: #B7FFAD;
    --green-light-600: #19660A;
    --green-light-800:  #054504;

    --yellow-light-100: #FBEECA;
    --yellow-light-600: #9B5203;

    --cyan-light-100: #C7F9ED;
    --cyan-light-600: #006074;

    --whatsapp-green: #25D366;
    --whatsapp-green-hover: #13ab4c;

    --background: #F0F2F5;
    --text-title: #35373F;
    --text: #5A5D68;
    --box-shadow: #18274b14;
  }

  ${BaseGlobalStyle}
`;

export const DarkGlobalStyles = createGlobalStyle`
  :root {
    --white: #000000; 
    --balck: #FFFFFF; 
    --gray: #6f7073;
    --blue: #4d70ff;
    --red: #F9675B;
    --green: #38B878;
    --yellow: #F9D65B;
    --cyan: #1c9ab5;
    --orange: #F9A75B;
    
    --neutral: #5A5D68;
    --neutral-400: #979AA5;
    --neutral-600: #F3F5F9;

    --blue-dark-500:#3366FF;
    --blue-dark-600: #254EDB;
    --blue-dark-800: #102693;

    --blue-light-200: #ADC8FF;
    --blue-light-400: #D6E4FF;
    --blue-light-500: #3366FF;

    --red-light-100: #FAE0D2;
    --red-light-600:  #871821;
    --red-light-800: #5B0A1F;
    
    --green-light-100: #E3F8CC;
    --green-light-200: #B7FFAD;
    --green-light-600: #19660A;
    --green-light-800:  #054504;

    --yellow-light-100: #FBEECA;
    --yellow-light-600: #9B5203;

    --cyan-light-100: #C7F9ED;
    --cyan-light-600: #006074;

    --whatsapp-green: #25D366;
    --whatsapp-green-hover: #13ab4c;

    --background: #35373F;
    --text-title: #F0F2F5;
    --text: #C6C8CC;
    --box-shadow: #7987A814;
  }

  ${BaseGlobalStyle}
`;
