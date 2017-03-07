
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('username').del()
    .then(function () {
      // Inserts seed entries
      return knex('username').insert([
        { email: 'drumstix@gmail.com', name: 'Jeff' },
        { email: 'supplayer@gmail.com', name: 'Robb' },
        { email: 'yoooo@gmail.com', name: 'Britney' },
        { email: 'Bobby@gmail.com', name: 'Bobby' },
        { email: 'anactualgoat@gmail.com', name: 'Dr. Goats' },
      ]);
    });
};
