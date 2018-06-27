
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table) {
    table.integer('famous_person_id').unsigned();
    table.foreign('famous_person_id').references('famous_person.id');
    })
    ]);
};

exports.down = function(knex, Promise) {
  knex.schema.table('milestones', function(table) {
    knex.schema.dropForeign;
  })
};

