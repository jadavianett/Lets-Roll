const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // emailAddress: {
    //     type: String,
    //     trim: true,
    //     required: "Email address is required",
    // },
    password: {
        type: String,
        trim: true,
        required: "Password is required",
    },
    username: String, 

    // firstName: {
    //     type: String,
    //     trim: true,
    // },
    // lastName: {
    //     type: String,
    //     trim: true,
    // },
    skateSince: {
        type: Date
    },
    skills:
      {
        type: Object
      }
    ,
    places: [
        {
          type: Schema.Types.ObjectId,
          ref: "Place",
        },
      ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;