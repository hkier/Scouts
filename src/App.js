import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Booth from './Components/Booth'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Booth/>
      </div>
    );
  }
}

export default App;
