import React, { PropTypes } from 'react';
import City from './City';
import { Loading } from '../loading'

const CityList = (props) => {
  const renderCity = (city) => {
    if(city.data.city) {
      return (
        <City key={city.data.city.id} data={city.data} />
      );
    }

    return (
      <Loading key={city}/>
    );
  }
  
  return (
    <div>
      {Object.keys(props.cities).map(city => renderCity(props.cities[city]))}
    </div>
  );
}

CityList.propTypes = {
  cities: PropTypes.object.isRequired
};

export default CityList;
