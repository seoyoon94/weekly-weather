export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const ERROR = 'ERROR';
export const REMOVE_CITY = 'REMOVE_CITY';

const requestWeather = (city, country) => {
  return {
    type: REQUEST_WEATHER,
    payload: {
      city,
      country
    }
  };
};

const receiveWeather = (city, country, data) => {
  return {
    type: RECEIVE_WEATHER,
    payload: {
      city,
      country,
      data
    }
  };
};

const receiveError = (err) => {
  return {
    type: ERROR,
    payload: err,
    error: true
  };
};

export const loadWeather = (city, country) => (dispatch, getState)  => {
  dispatch(requestWeather(city, country));

  if(typeof city === 'undefined') {
    return;
  }
  const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?';
  const QUERY_PARAMS = 'APPID=1f19327af7a5bd7890f3916fc4b350ca&type=accurate&units=imperial&cnt=7&q=';
  const cityURI = encodeURIComponent(city);

  let URL = BASE_URL + QUERY_PARAMS + cityURI;

  if(country) {
    URL += ',' + encodeURIComponent(country.trim());
  }

  return fetch(URL)
    .then(response => {
      if(!response.ok) {
        throw new Error("Error in fetching the OpenWeatherMap API.");
      }
      return response.json();
    })
    .then(data => dispatch(receiveWeather(city, country, data)))
    .catch(err => dispatch(receiveError(err)));
};

export const removeCity = (city, country) => {
  return {
    type: REMOVE_CITY,
    payload: {
      city,
      country
    }
  };
};
