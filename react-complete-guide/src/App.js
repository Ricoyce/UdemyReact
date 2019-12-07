import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Rico" age="26" />
        <Person name="Kim" age="26" />
      </div>
    );
  }
}

export default App;
