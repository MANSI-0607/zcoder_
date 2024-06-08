const express = require("express");
const router = express.Router();
const {handleUploadQuestion  } = require("../controller/UploadQuestion");

router.route("/:username/uploadQuestion").post(handleUploadQuestion);

module.exports = router;
