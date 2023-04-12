/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('projects').truncate()
  await knex('projects').insert([
    {
      project_name: 'Spain Trip', 
      project_description: "Planning for trip to Spain in spring 2024",
      project_completed: false
    },
    {
      project_name: 'Sell the House', 
      project_description: "Fix up the house and put it on the market",
      project_completed: false
    },
    {
      project_name: 'Teach Cat To Do Tricks', project_completed: true
    }
  ]);

  await knex('tasks').truncate()
  await knex('tasks').insert([
    {
      task_description: 'Teach cat how to play fetch', project_id: 3, 
      task_completed: true
    },
    {
      task_description: 'Book a hotel for Madrid', 
      task_notes: "Must be less than $150/night, should be close to city center", 
      project_id: 1,
      task_completed: false
    },
    {
      task_description: 'Learn some important Spanish phrases', 
      project_id: 1,
      task_completed: false
    },
    {
      task_description: 'Repaint the trim', 
      task_notes: "Light purple", 
      project_id: 2,
      task_completed: false
    },
    {
      task_description: 'Find a real estate agent', project_id: 2, 
      task_completed: true
    },
    {
      task_description: 'Teach cat to sit', 
      project_id: 3, 
      task_notes: "Must be able to stay until command is given to release",
      task_completed: true, 
    },
    {
      task_description: 'Find plane tickets', 
      project_id: 1,
      task_completed: false
    },
  ]);

  await knex('resources').truncate()
  await knex('resources').insert([
    {resource_name: 'booking.com', resource_description: "Good website to find hotels and plane tickets"},
    {resource_name: 'Spanish phrase book', resource_description: "Rick Steves's pocket phrase book"},
    {resource_name: '"How to Teach Old Cats New Tricks"', resource_description: "By Kat Goodman"},
    {resource_name: "Mom", resource_description: "Has some good worldly advice"}
  ]);

  await knex('project_resources').truncate()
  await knex('project_resources').insert([
    {project_id: 1, resource_id: 1},
    {project_id: 1, resource_id: 2},
    {project_id: 3, resource_id: 3},
    {project_id: 1, resource_id: 4},
    {project_id: 2, resource_id: 4},
    {project_id: 3, resource_id: 4},
  ]);


};
