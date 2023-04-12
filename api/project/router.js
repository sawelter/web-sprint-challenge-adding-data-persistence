// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');
const mid = require('./middleware')

/* [GET] /api/projects
Example of response body: [{
        "project_id":1,
        "project_name":"bar",
        "project_description":null,
        "project_completed":false
    }] */

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(next);
})

// [POST] /api/projects
// req body requires project_name
// req body can have project_completed and project_description
// res body includes all information: 
// {
    //     "project_id":1,
    //     "project_name":"bar",
    //     "project_description":null,
    //     "project_completed":false
    // }
router.post('/', mid.checkPayload, (req, res, next) => {
    Project.create(req.body)
        .then(project => {
            res.status(202).json(project);
        })
        .catch(next);
})

module.exports = router;