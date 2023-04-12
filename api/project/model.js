// build your `Project` model here
const db = require('../../data/dbConfig');


async function getAll () {
    return await db('projects');
}

function addProject () {

}


/*[POST] /api/projects

Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
 [GET] /api/projects

Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}] */

module.exports = {
    getAll,
    addProject
}