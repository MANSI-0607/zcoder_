const express = require("express");
const router = express.Router();
const {handleLogin} = require("../controller/Login");

router.route("/").post(handleLogin);

module.exports = router;
