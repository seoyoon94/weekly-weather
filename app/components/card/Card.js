import React, { PropTypes } from 'react';

import styles from './card.scss';

const Card = (props) => {
  return (
    <li className={styles.card}>
      <ul className={styles.descriptions}>
        <li>{props.date.dayOfWeek}</li>
        <li>{props.date.month}/{props.date.day}/{props.date.year}</li>
        <img src="" className={styles.weatherIcon} />
        <li><span>Temp:</span> {props.temp.day}</li>
        <li><span>Humidity:</span> {props.humidity}</li>
        <li><span>Forecast:</span> {props.forecast}</li>
      </ul>
    </li>
  );
}

Card.propTypes = {
  date: PropTypes.object.isRequired,
  temp: PropTypes.object.isRequired,
  humidity: PropTypes.number.isRequired,
  forecast: PropTypes.string.isRequired
};

export default Card;
