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
    this.setStateFromAddExpense = this.setStateFromAddExpense.bind(this);

  }

  componentDidMount() {
    console.log('I JUST MOUNTED'); // componentDidMount only runs once you start the server, doesn't run again when you rerender
    axios.get('/api/expenses')
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

  setStateFromAddExpense(newAdd) {
    console.log(this);
    this.setState({
      expenses: this.state.expenses.concat(newAdd)
    })
  }

  render() {
    console.log(this.props.children);
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
