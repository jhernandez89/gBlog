
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('username').del()
    .then(function () {
      // Inserts seed entries
      return knex('username').insert([
        { email: 'drumstix@gmail.com', name: 'Jeff' },
      ]);
    });
};
