// build your `Task` model here
const db = require('../../data/dbConfig');


// returns data for a task at a given id
async function get(task_id) {
    return await db('tasks').where('task_id', task_id).first();
}


/* Each task must include project_name and project_description; task_completed should be a boolean, not an integer.

    Example of response body: 
        [
            {
                "task_id":1,
                "task_description":"baz",
                "task_notes":null,
                "task_completed":false,
                "project_name:"bar","project_description":null
            }
        ]
*/
async function getAll() {
    const tasks = 
        await db('tasks as t')
                .select(
                    't.*', 
                    'p.project_name', 
                    'p.project_description')
                .leftJoin('projects as p', 't.project_id', '=', 'p.project_id');
    

    for(const task of tasks) {
        task.task_completed = !!task.task_completed;
    }

    return tasks;
}


/* 
Example of response body: 
    {
        "task_id":1,
        "task_description":"baz",
        "task_notes":null,
        "task_completed":false,
        "project_id":1
    }
*/ 
async function create(task) {
    const [task_id] = await db('tasks').insert(task);
    const newTask = await get(task_id);
    newTask.task_completed = !!newTask.task_completed;

    return newTask;
}


module.exports = {
    getAll, 
    create
}