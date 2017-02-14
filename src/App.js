import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';


class App extends Component {

  callApi() {
    axios.get('api') //it will prepend automatically
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.callApi}>CALL API</button>
      </div>
    );
  }
}

export default App;
