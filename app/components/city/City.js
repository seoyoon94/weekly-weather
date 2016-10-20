import React, { PropTypes } from 'react';

import styles from './city.scss';
import { RemoveButton } from '../../containers';
import { CardList } from '../index';

const CityHeader = (props) => {
  return (
    <div className={styles.header}>
      <h2><span>{props.city}</span>, {props.country}</h2>
      <RemoveButton id={props.id}>Remove</RemoveButton>
    </div>
  );
}

const City = (props) => {
  let { data } = props;
  return (
    <div className={styles.city}>
      <CityHeader city={data.city.name} country={data.city.country} id={data.city.id}/>
      <CardList {...props}/>
    </div>
  );
}

City.propTypes = {
  data: PropTypes.object.isRequired
};

export default City;
