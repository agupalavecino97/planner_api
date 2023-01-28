var data = require('../data');

const geActivities = (req, res) => {
    res.status(200).send({ data: data })
}

module.exports = { geActivities }