import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

import configureStore from './store';
import Root from './Root';

require('./assets/stylesheets/main.scss');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);
