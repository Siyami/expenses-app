import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expenses: [],
      refresh: null
    }

  }

  componentDidMount() {
    axios.get('/api/expenses') //it will prepend automatically
      .then(({data}) => {
        console.log(data);
        this.setState({
          expenses: data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        {React.cloneElement(
          this.props.children,
          {
            expenses: this.state.expenses,
            setStateFromAddExpense: this.setStateFromAddExpense
          }
        ) }
      </div>
    )
  }
}


export default App;
