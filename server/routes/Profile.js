const express = require("express");
const router = express.Router();
const { handleGetProfile } = require("../controller/Profile");

// Route for getting profile details
router.get("/", handleGetProfile);

module.exports = router;
