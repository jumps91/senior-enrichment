'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Link, HashRouter, Route } from 'react-router-dom'

import store from './store'
import Root from './components/Root'
import Main from './components/Main'

render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById('main')
);

// <Provider store={store}>
// </Provider>,