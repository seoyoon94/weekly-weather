import React, { PropTypes } from 'react';

import styles from './city.scss';
import { RemoveButton } from '../../containers';
import { CardList } from '../index';

const CityHeader = (props) => {
  return (
    <div>
      <h2><span>{props.city}</span>, {props.country}</h2>
      <RemoveButton city={props.city} country={props.country}>Remove</RemoveButton>
    </div>
  );
}

const City = (props) => {
  return (
    <div className={styles.city}>
      <CityHeader city={props.data.city.name} country={props.data.city.country} />
      <CardList {...props}/>
    </div>
  );
}

City.propTypes = {
  data: PropTypes.object.isRequired
};

export default City;
