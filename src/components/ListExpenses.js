import React, { Component } from 'react';
import { Grid, Table, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router';

class ListExpenses extends Component {

  deleteExpense(event, expense) {

    axios.delete(`/api/expenses/${expense.id}`) //it will prepend automatically
      .then(({data}) => {

      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {

    return (
      <Grid>
        <Col xs={8} xsOffset={2}>

        <h3>List of Expenses</h3>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.expenses.map((expense) => {
              return (
                <tr key={expense.amount + expense.category}>
                  <td>{expense.id}</td>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                  <td><button onClick={(event) => this.deleteExpense(event, expense)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>

        <Link to="/add" >
          <button>Add New Expense</button>
        </Link>
        </Col>

      </Grid>
    );
  }
}

export default ListExpenses;
