import React from 'react';

import { CardContainer } from '../../containers/index';
import { Header, Hero } from '../../components/index';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <CardContainer />
      </div>
    );
  }
}

export default Home;
