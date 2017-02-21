'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.get('/expenses', (req, res) => {
  knex('expenses')
    .orderBy('id')
    .then((expenses) => {
      res.send(expenses);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/expenses', (req, res) => {
  knex('expenses')
    .insert({category: req.body.category, amount: req.body.amount})
    .returning('*')
    .then(expenses => res.json(expenses[0]))
    .catch((err) => {
      console.log(err);
    });
});

router.delete('/expenses/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);

  // if (Number.isNaN(id)) {
  //   return next();
  // }
  knex('expenses')
    .del('*')
    .where('id', id)
    .then((expenses) => {
      const expense = expenses[0];

      if (!expense) {
        console.log('errorrrrrr');
      }
      delete expense.id;
      res.send(expense);
    })
    .catch((err) => {
      console.log(err);
    });
});



module.exports = router
