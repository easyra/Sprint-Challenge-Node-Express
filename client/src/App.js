import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectContainer/>
      </div>
    );
  }
}

export default App;
