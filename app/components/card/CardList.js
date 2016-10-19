import React, { PropTypes } from 'react';

import { FilteredCard } from '../../containers';

import styles from './card.scss';

const CardList = (props) => {
  return (
    <ul className={styles.cardList}>
      {props.data.list.map((data, index) => <FilteredCard key={index} data={data}/>)}
    </ul>
  );
}

CardList.propTypes = {
  data: PropTypes.object.isRequired
};

export default CardList;
