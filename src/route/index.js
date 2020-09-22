const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "10 Linguagens de Programação populares",
        data: "21/09/2020"
    })
});


module.exports = router;
