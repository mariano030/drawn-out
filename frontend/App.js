import React from 'react'
import {
  Router,
  Switch,
  Route
} from 'react-router-dom'
import Link from './components/Link'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

import About from './containers/About'
import Lobby from './containers/Lobby'
import Welcome from './containers/Welcome'

import { Header, Footer, Main, Left, Right, Grid } from './components/SiteLayout'

const App = ({ history }) => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Grid>
          <Header />
          <Main>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/room/:code'>
                <Lobby />
              </Route>
              <Route path='/'>
                <Welcome />
              </Route>
            </Switch>
          </Main>
          <Left />
          <Right />
          <Footer>
            <Link to='/'>start here</Link>&nbsp;
            |
            &nbsp;
            <Link to='/about'>about</Link>
          </Footer>
        </Grid>
      </Router>
    </ThemeProvider>
  )
}

export default App
