const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Os melhores Restaurantes de Recife segundo o Fork",
        data: "23/09/2020"
    })
});


module.exports = router;
