class Weather {
  constructor() {
    this.url = "http://api.openweathermap.org/data/2.5/";
    this.API_KEY = "APPID=1f19327af7a5bd7890f3916fc4b350ca";
  }

  /**
   * Construct the correct url depending if the user wants current
   * weather data or a weekly forecast.
   *
   * @param {string} type A value of either 'forecast' for a 7 day
   *      forecast or 'current' for the current weather data.
   * @param {Object} params An object containing the parameters for
   *      the desired weather data.
   *
   * @return {string} The url that will be called to the OpenWeather
   *      API for desired data.
   */
  constructUrl(type = 'forecast', params) {
    let fetchType = '';
    switch(type) {
      case 'forecast':
        fetchType = `${type}/daily`;
        break;
      case 'current':
        fetchType = 'weather';
        break;
      default:
        fetchType = `${type}/daily`;
        break;
    }

    let fetchParams = Object.keys(params).map( type => {
      return `${type}=${encodeURIComponent(params[type])}`;
    }).join('&');

    return `${this.url}${fetchType}?${fetchParams}&${this.API_KEY}`;
  }

  /**
   * Construct an object with parameters that will be utilized to
   * customize the data that will be received from the OpenWeather
   * API
   *
   * @param {string} location The location to get the weather data
   *    from.
   * @param {string} units A value of 'imperial' or 'metric' to display
   *    the temperature.
   * @param {number} numDays A number ranging from 1 through 16 which
   *    indicates how much weather data to collect.
   * @return {Object} An object that stores the parameter data as keys
   *    to construct the URL with.
   */
  constructQueryParams(location, units = 'imperial', numDays = 7) {
    return {
      q: location,
      type: 'accurate',
      units: units,
      cnt: numDays
    };
  }

  /**
   * Fetches and retreives the specified weather data as a Promise.
   */
  getWeatherData(type, location, units, numDays) {
    let dataUrl = this.constructUrl(type, this.constructQueryParams(location, units, numDays));
    return fetch(dataUrl)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
      });
  }
}

export default Weather;

