import React from 'react';
import { Link } from 'react-router';
import styles from './header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.siteHeader}>
        <nav>
          <ul>
            <li><Link to='preferences' className={styles.navlink}>Preferences</Link></li>
            <li><Link to='login' className={styles.navlink}>Login</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
