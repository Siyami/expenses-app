import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import AddExpense from './components/AddExpense.js';
import ListExpenses from './components/ListExpenses.js'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ListExpenses} />

    <Route path="add" component={AddExpense} />

  </Route>
);
