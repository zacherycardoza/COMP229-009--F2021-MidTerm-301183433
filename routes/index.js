// File Name: routes/index.js | Student Name: Zachery Cardoza | Student Id: 301183433 | Oct 26th, 2021
var express = require("express");
var router = express.Router();
let controlerIndex = require("../controllers/index");

/* GET home page. */
router.get("/", controlerIndex.home);

module.exports = router;
