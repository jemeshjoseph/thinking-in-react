import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Demo Apps</p>
      </header>
    );
  }
}
