import React, { PropTypes } from 'react';

import styles from './city.scss';
import { CardList } from '../index';

const City = (props) => {
  return (
    <div className={styles.city}>
      <h2><span>{props.data.city.name}</span>, {props.data.city.country}</h2>
      <CardList {...props}/>
    </div>
  );
}

City.propTypes = {
  data: PropTypes.object.isRequired
};

export default City;
