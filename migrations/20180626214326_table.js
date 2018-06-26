
exports.up = function(knex, Promise) {
  return knex.schema.createTable("famous_people", table => {
    table.increments("id").primary(),
    table.string("first_name"),
    table.string("last_name"),
    table.date("birthdate")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("famous_people");
};
