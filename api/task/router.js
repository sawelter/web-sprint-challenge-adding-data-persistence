// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model');

/* [POST] /api/tasks

Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
Example of response body: {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}
 [GET] /api/tasks

Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
Each task must include project_name and project_description
Example of response body: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]*/

    router.get('/', (req, res, next) => {
        Task.getAll()
            .then(tasks => {
                res.status(200).json(tasks);
            })
            .catch(next);
    });


    router.post('/', (req, res, next) => {
        Task.create(req.body)
            .then(task => {
                res.status(202).json(task);
            })
            .catch(next);
    })

module.exports = router;