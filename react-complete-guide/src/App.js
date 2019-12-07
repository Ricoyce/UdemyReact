import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

const app = props => {

  return (
    <div className="App">
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>And I am a developer.</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
    </div>
  );
}

export default app;

state = {
  persons: [
    { name: 'Rico', age: 26 },
    { name: 'Kim', age: 26 }
  ],
  otherState: 'some value'
}

switchNameHandler = () => {
  this.setState({
    persons: [
      { name: 'Rico', age: 27 },
      { name: 'Kim', age: 26 }
    ]
  })
}
