
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog_entry', function (table) {
    table.increments();
    table.string('body', 2000);
    table.timestamp('created_at').default(knex.fn.now());
    table.string('title');
    table.string('username_email')
      .references('username.email')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('blog_entry');
};
