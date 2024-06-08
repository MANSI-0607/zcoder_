const express = require('express');
const router = express.Router();
const { handleEditProfile } = require('../controller/EditProfile');
//const authenticateToken = require('../middleware/jwtauth');

router.post("/", handleEditProfile);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 944bb4dc30687d5b75d037356580867b7afd7a15
