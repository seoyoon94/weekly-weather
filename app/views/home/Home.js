import React from 'react';

import { CitiesContainer } from '../../containers';
import { Header, Hero, Modal } from '../../components';

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
        {this.props.children}
      </div>
    );
  }
}

export default Home;
