import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import About from './containers/About'
import Lobby from './containers/Lobby'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <Lobby />
        </Route>
      </Switch>
      <nav>
        <Link to='/'>lobby</Link>
        <Link to='/about'>about</Link>
      </nav>
    </Router>

  )
}

export default App
