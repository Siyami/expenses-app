import React, { Component } from 'react';
import { Grid, Table, Col } from 'react-bootstrap';
import { Link } from 'react-router';

class ListExpenses extends Component {

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
                  <td><button onClick={(event) => this.props.deleteExpenseFromListExpense(event, expense)}>Delete</button></td>
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
