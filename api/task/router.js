// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model');

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

    router.get('/', (req, res, next) => {
        Task.getAll()
            .then(tasks => {
                res.status(200).json(tasks);
            })
            .catch(next);
    });



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
    router.post('/', (req, res, next) => {
        const { task_description, project_id } = req.body;
        

        if(!task_description) {
            res.status(400).json({message: "task_description is required"})
        } else if(project_id === null || project_id <= 0 || isNaN(parseInt(project_id))) {
            res.status(400).json({message: "project_id must be a positive integer"})
        } else {
            Task.create(req.body)
            .then(task => {
                res.status(202).json(task);
            })
            .catch(next);
        }        
    })

module.exports = router;