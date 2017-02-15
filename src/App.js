import React, { Component } from 'react';
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

        <button onClick={this.callApi}>CALL API</button>
      </div>
    );
  }
}

export default App;
