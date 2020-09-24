const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Os livros mais vendidos no Mundo",
        data: "23/09/2020"
    })
});


module.exports = router;
