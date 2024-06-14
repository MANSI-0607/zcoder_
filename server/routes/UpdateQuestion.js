const express = require("express");
const router = express.Router();
const {handleUpdateQuestion  } = require("../controller/UpdateQuestion.js");

router.route("/:questionId").put(handleUpdateQuestion);

module.exports = router;
