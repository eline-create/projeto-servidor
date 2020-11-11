const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        title: "As Linguagens de Programação mais populares da atualidade",
        data: "21/09/2020",
        version: "2.0.0"
    })
});


module.exports = router;


