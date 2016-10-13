import React, { PropTypes } from 'react';
import { Weather } from '../../helpers/index';

import { CardList, Loading } from '../../components/index';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.weather = new Weather();
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    this.weather.getWeatherData('forecast', 'New York', 'imperial', 7)
      .then(data => {
        this.setState({
          data: data
        });
      })
      .catch(err => console.log("Error with getting weather data: " + err));
  }

  render() {
    if(this.state.data) {
      return (
        <CardList data={this.state.data}/>
      );
    }
    else {
      return (
        <Loading />
      );
    }
  }
}

export default CardContainer;
