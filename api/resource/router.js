// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model');


/*  [POST] /api/resources

Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}
 [GET] /api/resources

Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}] */

module.exports = router;