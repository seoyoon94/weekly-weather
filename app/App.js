import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

import configureStore from './store';
import Routes from './Routes';

require('./ui/assets/css/main.scss');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Routes store={store} history={history}/>,
  document.getElementById('root')
);
