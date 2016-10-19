import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { Home } from './views/index';
import { PreferenceModal } from './containers';

const Root = ({store, history}) =>  {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Home}>
          <Route path='preferences' component={PreferenceModal}></Route>
          <Route path='login'></Route>
        </Route>
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
