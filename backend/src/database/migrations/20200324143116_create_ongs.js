exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').noNullable();
    table.string('email').noNullable();
    table.string('whatsapp').noNullable();
    table.string('city').noNullable();
    table.string('uf', 2).noNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
