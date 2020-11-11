const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        title: "10 Linguagens de Programação populares",
        data: "21/09/2020",
        version: "2.0.0"
    })
});


module.exports = router;


