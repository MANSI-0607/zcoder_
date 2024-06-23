const express = require("express");
const router = express.Router();
const {handleUpdateQuestion ,handleDeleteQuestion} = require("../controller/UpdateQuestion.js");

router.route("/:questionId").put(handleUpdateQuestion);
router.route("/:questionId").delete(handleDeleteQuestion);

module.exports = router;
