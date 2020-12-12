const lp = require("../model/lp");

const getAll = (req, res) => {
  console.log(req.url);
  res.send(lp);
};

const getLanguage = (req, res) => {
  const language = req.body.language;

  res.status(200).send(lp.filter((lp) => lp.language == language));
 
};

const getComment = (req, res) => {
  const comment = req.body.comment;

  res.status(200).send(lp.filter((lp) => lp.comment == comment));
};

const postNewLanguage = (req, res) => {
  let language = new lp(req.body);

  language.save((err) => {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(201).send({ message: "Successful registration!!" });
  });
};


const deleteByYear = (req, res) => {
  const creationYear = req.params.creationYear;
  const lpFiltrado = lps.find((colab) => lp.creationYear == creationYear);
  const index = colabs.indexOf(lpFiltrado);
  lps.splice(index, 1);
  res.status(200).send(lps);
};

const putId = (req, res) => {
  const id = req.params.id;
  try {
    const lpASerModificada = livros.find((lp) => lp.id == id);
    const lpAtualizada = req.body;
    const index = lp.indexOf(lpASerModificada);
    lp.splice(index, 1, lpAtualizada);
       return res.status(200).send(lps);
  } catch (err) {
    return res.status(424).send({
      message: err,
    });
  }
};





module.exports = {
  getAll,
  getLanguage,
  getComment,
  postNewLanguage,
  deleteByYear,
  putId,
};
