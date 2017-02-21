exports.up = function(knex) {
  return knex.schema.createTable('expenses', (table) => {
    table.increments()
    table.string('category')
    table.decimal('amount')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('expenses');
};
