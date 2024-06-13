const express = require("express");
const router = express.Router();
const { handleMyStack } = require("../controller/MyStack");
//const authenticateToken = require('../middleware/jwtauth');

router.get("/", handleMyStack);

module.exports = router;
