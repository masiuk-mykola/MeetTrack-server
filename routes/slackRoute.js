const express = require("express");

const { checkSlack } = require("../controller/slackController");
const router = express.Router();

router.post("/", checkSlack);

module.exports = router;
