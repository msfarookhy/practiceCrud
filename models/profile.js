const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: String,
  emailId: String,
  address: String,
  number: Number,
  image: String
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
