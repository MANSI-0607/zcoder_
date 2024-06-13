const express = require('express');
const router = express.Router();
const { handleGetRecentQuestions } = require('../controller/RecentQuestions');
//const authenticateToken = require('../middleware/jwtauth');

router.get("/", handleGetRecentQuestions);

module.exports = router;
