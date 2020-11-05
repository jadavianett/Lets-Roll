const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Place name is required",
    },
    location: {
        type: String,
        trim: true,
        required: "location is required",
    },
    notes: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        trim: true,
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

});

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;