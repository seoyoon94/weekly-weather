import React, { PropTypes } from 'react';

import styles from './city.scss';
import { CardList } from '../index';

class City extends React.Component {
  render() {
    return (
      <div className={styles.city}>
        <h2><span>{this.props.data.city.name}</span>, {this.props.data.city.country}</h2>
        <CardList {...this.props}/>
      </div>
    );
  }
}

City.propTypes = {
  data: PropTypes.object.isRequired
};

export default City;
