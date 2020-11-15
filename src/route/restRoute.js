const express = require("express")
const router = express.Router()
const controller = require("../controller/restController")


router.get("/", controller.getAll)
router.post("/", controller.postNewRest)
router.delete("/:id", controller.deleteRest )
router.put("", controller.putRest)


module.exports = router