const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "As 10 cidades turísticas mais visitadas no mundo",
        data: "24/09/2020"
    })
});


module.exports = router;
