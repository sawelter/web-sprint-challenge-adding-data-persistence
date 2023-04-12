// build your `Resource` model here
const db = require('../../data/dbConfig');


async function get(id) {
    return await db('resources').where('resource_id', id).first();
}

// returns all resources as an array 
async function getAll() {
    return await db('resources');
}

// creates new resource from given argument
// and returns the new resource from the db
async function create(resource){
    const [resource_id] = await db('resources').insert(resource);
    const newResource = get(resource_id);
    return newResource;
}

module.exports = {
    getAll,
    create
}