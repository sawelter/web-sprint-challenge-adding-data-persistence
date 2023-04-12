/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */



exports.up = function(knex) {
  return knex.schema
    .createTable('projects' , table => {
        table.increments('project_id');
        table.string('project_name', 128)
            .notNullable();
        table.string('project_description', 500);
        table.boolean('project_completed')
            .defaultTo(0);
    })
    .createTable('resources' , table => {
        table.increments('resource_id');
        table.string('resource_name', 128)
            .unique()
            .notNullable();
        table.string('resource_description', 500);
    })
    .createTable('tasks' , table => {
        table.increments('task_id');
        table.string('task_description', 128)
            .notNullable();
        table.string('task_notes', 500);
        table.boolean('task_completed')
            .defaultTo(0);
        table.integer('project_id')
            .notNullable()
            .unsigned()
            .references('projects_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT');

    })
    .createTable('project_resources', table => {
        table.increments('project_resource_id');
        table.integer('project_id')
            .notNullable()
            .unsigned()
            .references('projects_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT');
        table.integer('resource_id')
            .notNullable()
            .unsigned()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT');
    });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
