import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global/global-style'
import { theme } from '../../styles/global/theme'
import { Header } from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
