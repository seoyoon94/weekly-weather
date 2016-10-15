import React, { PropTypes } from 'react';

import Card from './Card';
import { FormattedDate } from '../../helpers/index';

import styles from './card.scss';

//TODO: Consider putting state into an overarching container that
//      will hold information about which weather locations have
//      been searched.
//
//TODO: Add header for the list that displays the location and add
//      a remove button that will delete the location from the state.

const CardList = (props) => {
  return (
    <ul className={styles.cardList}>
      {props.data.list.map((data, index) => <Card key={index} data={data}/>)}
    </ul>
  );
}

CardList.propTypes = {
  data: PropTypes.object.isRequired
};

export default CardList;
