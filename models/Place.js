//Require and defining the mongoose package to create a model 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//The items needed for the Place Schema 
const PlaceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Place name is required",
  },
  location: {
    type: String,
    trim: true,
    required: "Location is required",
  },
  notes: {
    type: Array,
    trim: true
},
  type: {
    type: String,
    trim: true,
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

//Defining the Place model 
const Place = mongoose.model("Place", PlaceSchema);

//exporting the Place model for use
module.exports = Place;
