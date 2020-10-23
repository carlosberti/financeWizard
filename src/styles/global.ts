import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  html {
      font-size: 62.5%;
    }
    ${({ removeBg }) => css`
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
        background: ${removeBg ? 'unset' : `#1C2124`};
      }
    `}
`

export default GlobalStyles
