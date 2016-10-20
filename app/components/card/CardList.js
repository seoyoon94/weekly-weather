import React, { PropTypes } from 'react';

import { FilteredCard } from '../../containers';

import styles from './card.scss';

const CardList = ({data}) => {
  return (
    <ul className={styles.cardList}>
      {data.list.map((day, index) => <FilteredCard key={index} data={day}/>)}
    </ul>
  );
}

CardList.propTypes = {
  data: PropTypes.object.isRequired
};

export default CardList;
