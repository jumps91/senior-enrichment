'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Link, HashRouter, Route } from 'react-router-dom'

import store from './store'
import Root from './components/Root'
import Campuses from './components/Campuses'
import Students from './components/Students'
import CampusInfo from './components/CampusInfo'
import StudentInfo from './components/StudentInfo'

render(
  <HashRouter>
    <div>
      <div className="navbar" >
        <Link to="/campuses">Campuses</Link>
        <Link to="/students">All Students</Link>
      </div>
      <Route exact path="/campuses" component={Campuses} />
      <Route exact path="/students" component={Students} />
      <Route exact path="/campuses/:campusId" component={CampusInfo} />
      <Route exact path="/students/:studentId" component={StudentInfo} />
    </div>
  </HashRouter>,
  document.getElementById('main')
);

// <Provider store={store}>
// </Provider>,