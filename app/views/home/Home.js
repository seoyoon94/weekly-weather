import React from 'react';

import { Cities, Header, Hero } from '../../ui';

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
