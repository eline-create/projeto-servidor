const lp = require("../model/lp.json");

const getAll = (req, res) => {
  console.log(req.url);
  res.send(lp);
};

const getLanguage = (req, res) => {};

const getComment = (req, res) => {};

const postNewLanguage = (req, res) => {};

const deleteByYear = (req, res) => {};

const putId = (req, res) => {};

module.exports = {
  getAll,
  getLanguage,
  getComment,
  postNewLanguage,
  deleteByYear,
  putId,
};
