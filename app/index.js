import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';

require('./assets/stylesheets/main.scss');

ReactDOM.render(
  routes,
  document.getElementById('root')
);
