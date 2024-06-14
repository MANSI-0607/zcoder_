const express = require('express');
const router = express.Router();
const { handleGetRecentQuestions,handleGetQuestion } = require('../controller/RecentQuestions');
//const authenticateToken = require('../middleware/jwtauth');

router.get("/", handleGetRecentQuestions);
router.get("/:id", handleGetQuestion);
module.exports = router;
