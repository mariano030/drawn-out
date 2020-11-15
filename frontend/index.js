import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'

import { Provider } from 'react-redux'
import store from './store'

import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

//socketLikeItsHot(store, history)

ReactDOM.render((
  <Provider store={store}>
    <App history={history} />
  </Provider>
), document.getElementsByTagName('main')[0])
