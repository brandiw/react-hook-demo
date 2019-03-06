import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameTag from './NameTag';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NameTag name="Brandi" />
        </header>
      </div>
    );
  }
}

export default App;
