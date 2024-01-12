import React from 'react';
import nobelLogo from '../assets/nobel_logo.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ nobelLogo } alt="Nobel Logo" />
      </header>
    );
  }
}

export default Header;
