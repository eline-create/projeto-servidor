const lp = require('../model/lp.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.send(lp);
};

module.exports = { getAll };

