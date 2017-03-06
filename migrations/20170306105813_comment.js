
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', function (table) {
    table.increments();
    table.string('body');
    table.timestamp("created_at").default(knex.fn.now());
    table.string('title');
    table.integer('user_id')
      .references('username.id')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('comment');
};
