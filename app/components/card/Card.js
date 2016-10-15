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

const Card = (props) => {
  let date = formatDate(props.data.dt);
  return (
    <li className={styles.card}>
      <ul className={styles.descriptions}>
        <li>{date.dayOfWeek}</li>
        <li>{date.month}/{date.day}/{date.year}</li>
        <img src="" className={styles.weatherIcon} />
        <li><span>Temp:</span> {props.data.temp.day}</li>
        <li><span>Humidity:</span> {props.data.humidity}</li>
        <li><span>Forecast:</span> {props.data.weather[0].main}</li>
      </ul>
    </li>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired
};

export default Card;
