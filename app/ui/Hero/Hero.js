import React from 'react';
import styles from './hero.scss';

import * as Input from '../Input';

const HeroHeader = () => {
  return (
    <div className={styles.heroHeader}>
      <h1>Weekly Weather</h1>
      <p>A simple weather tool for easy trip planning</p>
      <Input.Search />
    </div>
  );
};

class Hero extends React.Component {
  render() {
    return (
      <div className={styles.hero}>
        <HeroHeader />
      </div>
    );
  }
}

export default Hero;
