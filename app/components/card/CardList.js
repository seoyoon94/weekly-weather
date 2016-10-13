import React, { PropTypes } from 'react';

import Card from './Card';
import { FormattedDate } from '../../helpers/index';

import styles from './card.scss';

//TODO: Extract date formatting out of the component and send in
//      formatted date in through props.
//
//TODO: Consider putting state into an overarching container that
//      will hold information about which weather locations have
//      been searched.
//
//TODO: Add header for the list that displays the location and add
//      a remove button that will delete the location from the state.

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.createCard = this.createCard.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(timestamp) {
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
  
  createCard(data, index) {
    const date = this.formatDate(data.dt);
    return (
      <Card 
        key={index}
        date={date}
        temp={data.temp}
        humidity={data.humidity}
        forecast={data.weather[0].main}/>
    );
  }

  render() {
    return (
      <ul className={styles.cardList}>
        {this.props.data.list.map(this.createCard)}
      </ul>
    );
  }
}

CardList.propTypes = {
  data: PropTypes.object.isRequired
};

export default CardList;
