
const checkPayload = (req, res, next) => {
    const { project_name } = req.body;
    if(project_name) {
        next();
    } else {
        res.status(400).json({message: "project_name required"})
    }
}

module.exports = {
    checkPayload
}