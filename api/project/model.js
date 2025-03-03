// build your `Project` model here
const db = require('../../data/dbConfig');

async function get(id){
    return await db('projects').where('project_id', id).first();
}

async function getAll () {
    const projects = await db('projects');

    for(const project of projects) {
        project.project_completed = !!project.project_completed;
    }

    return projects;
}

async function create (project) {
    const [project_id] = await db('projects').insert(project);
    const newProject = await get(project_id);

    newProject.project_completed = !!newProject.project_completed; // changes project_completed from int to boolean

    return newProject;
}


/*[POST] /api/projects

Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
 [GET] /api/projects

Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}] */

module.exports = {
    getAll,
    create
}