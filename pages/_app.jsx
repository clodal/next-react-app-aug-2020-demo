import React from 'react'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { theme } from '../src/theme'

const App = (props) => {
  const { Component, pageProps } = props

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  // @link: https://github.com/zeit/next.js/tree/master/examples/with-dynamic-app-layout
  const Layout = Component.Layout || React.Fragment

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
          <div id="modal-root" />
        </Layout>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}

const styles = {
  '@global': {
    // Responsive base font size
    // xs and below: 14px
    // sm and above: 16px
    html: {
      fontSize: 14,
      [theme.breakpoints.up('sm')]: {
        fontSize: 16,
      },
    },
  },
}

export default withStyles(styles)(App)
