import React from 'react';

import { CityContainer } from '../../containers/index';
import { Header, Hero } from '../../components/index';
import { Weather } from '../../helpers/index';

//TODO: Either implement Redux with routing to access inner states
//      and connect to a store or send event handlers through
//      props to communicate with child componenets.

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.weather = new Weather();
    this.state = {
      cities: null
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <CityContainer />
      </div>
    );
  }
}

export default Home;
