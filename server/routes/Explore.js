const express = require("express");
const router = express.Router();
const { handleExplore } = require("../controller/Explore");
//const authenticateToken = require('../middleware/jwtauth');

router.get("/", handleExplore);

module.exports = router;
