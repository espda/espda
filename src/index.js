import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './styles/index.css';

import App from './components/App';
import CardGrid from './components/card-grid';
import Detail from './components/detail';


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CardGrid}></IndexRoute>
      <Route path="/companies/:companyId" component={Detail}></Route>
    </Route>
  </Router>
);

render(router, document.getElementById('root'));
