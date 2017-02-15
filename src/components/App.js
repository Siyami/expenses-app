import React, { Component } from 'react';
import axios from 'axios';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import './../App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expenses: [
        {
          id: 1,
          category: 'House Expense',
          amount: 1200
        },
        {
          id: 2,
          category: 'Shopping Expense',
          amount: 800
        }
      ]
    }
  }

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
      <div>
        {this.props.children}
        <button onClick={this.callApi}>CALL API</button>

        <h3>Expenses</h3>
        <button>Add Expense</button>

        <h3>List of Expenses</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Amount</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.expenses.map((expense) => {
              return (
                <tr>
                  <td>{expense.id}</td>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
