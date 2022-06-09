import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator'

class App extends Component {
  render() {
    return (
      <>
        <h1>add em up</h1>
        <Calculator />
      </>
    );
  }
}

export default App;
