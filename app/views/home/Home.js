import React from 'react';

import { CityContainer } from '../../containers/index';
import { Header, Hero } from '../../components/index';

class Home extends React.Component {
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
