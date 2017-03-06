
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        { body: 'How you doing world?',
          title: 'Hello world',
          user_id: knex('username').where('name', 'Jeff').select('id') },
      ]);
    });
};
