import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global.style'
import { ThemeCtxProvider, ThemeTogglerContext } from '../context/themeToggler.context'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeCtxProvider>
      <ThemeTogglerContext.Consumer>
        { data => <>
          <ThemeProvider theme={data.theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </>
        }
      </ThemeTogglerContext.Consumer>

    </ThemeCtxProvider>
  )
}

export default MyApp
