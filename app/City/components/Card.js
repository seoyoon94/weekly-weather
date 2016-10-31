import React, { PropTypes } from 'react';

import styles from './card.scss';

function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const month = date.getMonth() + 1;
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return {
    year: date.getFullYear(),
    month: month,
    day: date.getDate(),
    dayOfWeek: days[date.getDay()]
  };
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.renderData = this.renderData.bind(this);
  }

  renderData() {
    let { data } = this.props;
    let filteredData = {
      daytemp: data.temp.day,
      nighttemp: data.temp.eve,
      pressure: data.pressure,
      humidity: data.humidity,
      description: data.weather[0].description,
      windspeed: data.speed,
      winddirection: data.deg
    };

    return Object.keys(filteredData)
      .filter(prop => this.props.preferences[prop])
      .map(prop => <li key={prop}><span>{prop}:</span> {filteredData[prop]}</li>);
  }


  render() {
    let date = formatDate(this.props.data.dt);
    return (
      <li className={styles.card}>
        <ul className={styles.descriptions}>
          <li>{date.dayOfWeek}</li>
          <li>{date.month}/{date.day}/{date.year}</li>
          <img src="" className={styles.weatherIcon} />
          {this.renderData()}
        </ul>
      </li>
    );
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  preferences: PropTypes.object.isRequired
};

export default Card;
