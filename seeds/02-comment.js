
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function() {
      // Inserts seed entries
      return knex('comment').insert([
        { body: 'How you doing Dr. Goats?',
          videoLink: 'https://www.youtube.com/watch?v=PRAVACbfZH0',
          user_id: knex('username').where('name', 'Jeff').select('id') },
        { body: 'Like a goat do',
          videoLink: '',
          user_id: knex('username').where('name', 'Dr. Goats').select('id') },
      ]);
    });
};
