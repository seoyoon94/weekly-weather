import * as ActionTypes from '../actions';
import { combineReducers } from 'redux';
import _ from 'lodash';

//TODO: Change remove function so it takes cities by ID.
//BUG: If country is omitted, country is undefined
//TODO: Add data reducer and format data action so the
//      returned API data will be in line with the preferences
//      so the data can be easily mapped in the card.

export const citiesById = (state = {}, action) => {
  switch(action.type) {
    case ActionTypes.REQUEST_WEATHER:
    case ActionTypes.RECEIVE_WEATHER:
    case ActionTypes.ERROR:
      let cityID = action.payload.id;
      if(cityID) {
        return Object.assign({}, state, { [cityID]: city(state[cityID], action) });
      }
      return state;
      break;
    case ActionTypes.REMOVE_CITY:
      return _.omit(state, action.payload.id);
        break;
    default:
      return state;
  }
};

const city = (state = {
  isFetching: false, 
  data: {}
}, action) => { switch(action.type) {
    case ActionTypes.REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true
      });
      break;
    case ActionTypes.RECEIVE_WEATHER:
      let data = action.payload.data;
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

export const preferences = (state = {
  format: true,
  daytemp: false,
  nighttemp: false,
  pressure: false,
  humidity: true,
  description: true,
  windspeed: false,
  winddirection: false
}, action) => {
  switch(action.type) {
    case ActionTypes.SAVE_PREFERENCES:
      return {
        ...action.payload.preferences
      };
    default:
      return state;
  }
};
