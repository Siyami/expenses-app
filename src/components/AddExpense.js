import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import axios from 'axios';
import knex from '../../knex.js';
import { Link, browserHistory } from 'react-router';

class AddExpense extends Component {
  constructor(props) {
    super(props)

    this.state = {
      category: '',
      amount: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const nextState = {
      [event.target.name]: event.target.value
    };

    this.setState(nextState);
  }

  handleSubmit(event) {
    // event.preventDefault();
    console.log(this.state.category);
    console.log(this.state.amount);

    axios.post('/api/expenses', {
      category: this.state.category,
      amount: this.state.amount
    })
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    // Reset the form
    this.setState({
      category: '',
      amount: ''
    });

    // setTimeout(function() { browserHistory.push('/') }, 3000);
    browserHistory.push('/')

  }

  render() {
    return (
      <Grid>
        <h1>Add Expense</h1>

        <form onSubmit={this.handleSubmit}>

            <label>
              Category:
              <input
                name="category"
                onChange={this.handleChange}
                type="text"
                value={this.state.category}
              />
            </label>

            <label>
              Amount:
              <input
                name="amount"
                onChange={this.handleChange}
                type="text"
                value={this.state.amount}
              />
            </label>

          <input type="submit" value="Add Expense" />

          <Link to="/">
            <button>Cancel</button>
          </Link>

        </form>

      </Grid>
    )
  }
}

export default AddExpense;
