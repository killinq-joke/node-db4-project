
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step_name: 'couper les pommes', step_number: 1, ingredient_qty: 0, ingredient_id: 2, recipe_id: 2},
        { step_name: 'faire confir les pommes', step_number: 2, ingredient_qty: 0, ingredient_id: 2, recipe_id: 2},
        { step_name: 'ajouter le chocolat', step_number: 4, ingredient_qty: 0, ingredient_id: 1, recipe_id: 3}
      ]);
    });
};
