// migration file: 20240813084300_create_users_table.js

exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary(); // Primary key
      table.string('national_id').notNullable().unique(); // National ID, unique
      table.string('name').notNullable(); // Name field
      table.string('email').notNullable().unique(); // Email field, unique
      table.string('password').notNullable(); // Password field
      table.string('otp').nullable(); // OTP field
      table.integer('electoral_district_id') // Foreign key
           .unsigned()
           .references('id')
           .inTable('electoral_districts')
           .onDelete('CASCADE'); // Delete user if electoral district is deleted
  
      // Add timestamps
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  