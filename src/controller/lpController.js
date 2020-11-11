const lp = require("../model/lp");

const getAll = (req, res) => {
  console.log(req.url);
  res.send(lp);
};

const getLanguage = (req, res) => {};

const getComment = (req, res) => {};

const postNewLanguage = (req, res) => {
  let language = new lp(req.body);

  language.save((err) => {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(201).send({ message: "Successful registration!!" });
  });
};

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
