import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Booth from './Components/Booth'
import Category from './Components/Category'
import Total from './Components/Total'
import Submit from './Components/Submit'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Booth/>
        <Category/>
        <Total/>
        <Submit/>
      </div>
    );
  }
}

export default App;
