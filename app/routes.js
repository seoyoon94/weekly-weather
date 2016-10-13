import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Home } from './views/index';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
  </Router>
);

export default routes;
