import React, { PropTypes } from 'react';
import City from './City';
import { Loading } from '../loading'

const CityList = (props) => {
  const renderCity = ({data, isFetching}) => {
    if(data.city) {
      return (
        <City key={data.city.id} data={data} />
      );
    }

    return (
      <Loading key={data}/>
    );
  }

  let { citiesById } = props;
  return (
    <div>
      {Object.keys(citiesById).map(cityId => renderCity(citiesById[cityId]))}
    </div>
  );
}

CityList.propTypes = {
  citiesById: PropTypes.object.isRequired
};

export default CityList;
