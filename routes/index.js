var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/home", (req, res) => {
  res.render("profile");
});

module.exports = router;
