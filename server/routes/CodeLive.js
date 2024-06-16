const express = require("express");
const router = express.Router();
const { handleCodeLive } = require("../controller/CodeLive");

router.post("/", handleCodeLive);

module.exports = router;
