exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe_name").notNullable();
    })

    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("ingredient_name");
    })

    .createTable("steps", tbl => {
      tbl.primary(["step_number", "recipe_id"]);
      tbl.string("step_name");
      tbl.integer("step_number");
      tbl.integer("ingredient_qty");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
