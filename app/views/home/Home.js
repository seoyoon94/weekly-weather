import React from 'react';

import { Cities } from '../../City';
import { Header } from '../../Header';
import { Hero } from '../../Hero';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Cities />
        {this.props.children}
      </div>
    );
  }
}

export default Home;
