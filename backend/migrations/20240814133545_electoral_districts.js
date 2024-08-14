// migration file: 20240813084240_create_electoral_districts_table.js

exports.up = function(knex) {
    return knex.schema.createTable('electoral_districts', function(table) {
      table.increments('id').primary(); // Primary key
      table.string('city').notNullable(); // City name
      table.string('circle').notNullable(); // Electoral district within the city
  
      // Add timestamps
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('electoral_districts');
  };
  