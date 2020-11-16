// require mongoose to create the model 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Model 
const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: "Email address is required",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
  },
  username: String,
  location: String,

  skateSince: {
    type: Date,
  },
  skills: {
    type: Object,
  },
  places: [
    {
      type: Schema.Types.ObjectId,
      ref: "Place",
    },
  ],
});

//Defining the User model 
const User = mongoose.model("User", UserSchema);

//Exports the User model for use 
module.exports = User;
