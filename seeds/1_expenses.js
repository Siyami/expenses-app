exports.seed = function(knex) {
  return knex('expenses').del()
    .then(() => {
      return knex('expenses').insert([
        {
        id: 1000,
        category: 'House Expense',
        amount: 1200
      },
      {
        id: 10001,
        category: 'Shopping Expense',
        amount: 800
      }]);
    });
};
