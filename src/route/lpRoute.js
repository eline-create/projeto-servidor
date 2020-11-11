const express = require("express");
const router = express.Router();
const controller = require("../controller/lpController");

router.get("/", controller.getAll);
router.get("/lp", controller.getLanguage);
router.get("/:commentSymbol", controller.getComment);
router.post("/", controller.postNewLanguage);
router.delete("/creationYear", controller.deleteByYear);
router.put("/:id", controller.putId);

module.exports = router;
