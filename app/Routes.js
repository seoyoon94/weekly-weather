import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { Home } from './views';
import { Modal } from './ui';

const Routes = ({store, history}) =>  {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Home}>
          <Route path='preferences' component={Modal.Preferences}></Route>
          <Route path='login'></Route>
        </Route>
      </Router>
    </Provider>
  );
}

Routes.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Routes;
