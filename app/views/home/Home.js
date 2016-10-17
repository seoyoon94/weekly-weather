import React from 'react';

import { CitiesContainer } from '../../containers';
import { Header, Hero } from '../../components';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <CitiesContainer />
      </div>
    );
  }
}

export default Home;
