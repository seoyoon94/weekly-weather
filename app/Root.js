import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { Home } from './views/index';

const Root = ({store, history}) =>  {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;