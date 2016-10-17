import * as ActionTypes from '../actions';
import _ from 'lodash';

//TODO: Change remove function so it takes cities by ID.

const citiesByName = (state = {}, action) => {
  switch(action.type) {
    case ActionTypes.REQUEST_WEATHER:
    case ActionTypes.RECEIVE_WEATHER:
    case ActionTypes.ERROR:
      let city = action.payload.city + action.payload.country;
      return Object.assign({}, state, {
        [city]: cities(state[city], action)
      });
      break;
    case ActionTypes.REMOVE_CITY:
      let key = action.payload.city + " " + action.payload.country;
      console.log(state );
      console.log(key);
      return _.omit(state, key);
        break;
    default:
      return state;
  }
};

const cities = (state = {
  isFetching: false, 
  data: {}
}, action) => {
  switch(action.type) {
    case ActionTypes.REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true
      });
      break;
    case ActionTypes.RECEIVE_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.data
      });
      break;
    case ActionTypes.ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload
      });
      break;
    default:
      return state;
  }
};

export default citiesByName;
