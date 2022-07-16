import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global/global-style'
import { theme } from '../../styles/global/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
