const express = require('express');
const router = express.Router();
const { handleEditProfile } = require('../controller/EditProfile');
//const authenticateToken = require('../middleware/jwtauth');

router.post("/", handleEditProfile);

module.exports = router;
