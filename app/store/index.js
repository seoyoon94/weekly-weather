import { createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const mainReducer = combineReducers({
  cities: rootReducer,
  routing: routerReducer
});

const configureStore = preloadedState => createStore(
  mainReducer,
  preloadedState,
  applyMiddleware(thunk)
);

export default configureStore;
