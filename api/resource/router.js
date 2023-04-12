// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model');


/* [GET] /api/resources
    Example of response body: 
    [
        {
            "resource_id":1,
            "resource_name":"foo",
            "resource_description":null
        }
    ]
*/
router.get('/', (req, res, next) => {
    Resource.getAll()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch();
})

/*  [POST] /api/resources 
        resource_name (REQUIRED)
        resource_description (optional)
*/
router.post('/', (req, res, next) => {
    const { resource_name } = req.body;
    if(!resource_name) {
        res.status(400).json({message: "resource_name required"})
    } else {
        Resource.create(req.body)
            .then(resource => {
                res.status(202).json(resource);
            })
            .catch(next);
    }
})


module.exports = router;