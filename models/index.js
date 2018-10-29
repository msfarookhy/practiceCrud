const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/myCrud",
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database is connceted");
    }
  }
);
mongoose.Promise = Promise;
module.exports.Profile = require("./profile");
