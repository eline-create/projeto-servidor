const rest = require('../model/rest.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.send(rest);
};

module.exports = { getAll };

