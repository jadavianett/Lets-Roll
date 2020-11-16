const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");


// Gets all places 
router.get("/", (req, res) => {
  db.Place.find({})
    .then((foundPlaces) => {
      res.json(foundPlaces);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to retrieve all places.",
      });
    });
});

// Gets place by specific id 
router.get("/:id", (req, res) => {
  db.Place.findOne({ _id: req.params.id }).then((foundPlace) => {
    res.json(foundPlace);
  });
});

// Creates a user by must pass authorization of the specific user 

router.post("/", (req, res) => {
  // To create a place, you must pass in an authorization header.
  // If no authorization header is provided, return 401.
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: true,
      data: null,
      message: "Unauthorized.",
    });
  }
 // If jwt is provided as an authorization header, make sure it is valid.
  jwt.verify(req.headers.authorization, "secret", (err, decoded) => {
     // If jwt is invalid (for any reason) return 401.
    if (err) {
      console.log(err);
      return res.status(401).json({
        error: true,
        data: null,
        message: "Invalid token.",
      });
    } else {
      //create the place and includes a specific creatorId
      console.log(decoded);
      const newPlace = {
        name: req.body.name,
        location: req.body.location,
        type: req.body.type,
        creatorId: decoded._id,
        notes: req.body.notes,
      };
      db.Place.create(newPlace).then((newPlace) => {
        res.json(newPlace);
      });
    }
  });
});

router.put("/:id", (req, res) => {
  // To update a place, you must pass in an authorization header.
  // If no authorization header is provided, return 401.
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: true,
      data: null,
      message: "Unauthorized.",
    });
  }
  // If jwt is provided as an authorization header, make sure it is valid.
  jwt.verify(req.headers.authorization, "secret", (err, decoded) => {
    // If jwt is invalid (for any reason) return 401.
    if (err) {
      console.log(err);
      return res.status(401).json({
        error: true,
        data: null,
        message: "Invalid token.",
      });
    } else {
      // If jwt is valid, pull the allowable fields from the body and update the place.
      console.log(decoded);
      const updatedPlace = {
        name: req.body.name,
        location: req.body.location,
        type: req.body.type,
        notes: req.body.notes,
      };
      // Restrict updates where the creatorId is equal to the user-provided token _id.
      db.Place.findOneAndUpdate({ _id: req.params.id }, updatedPlace, {
        new: true,
      })
        .then((updatedPlace) => {
          if (!updatedPlace) {
            res.status(404).json({
              error: true,
              data: null,
              message: "Unable to find that place.",
            });
          } else {
            res.json({
              error: false,
              data: updatedPlace,
              message: "Successfully updated place.",
            });
          }
        })
        .catch((err) => {
          res.status(500).json({
            error: true,
            data: null,
            message: "An error occurred updating your place.",
          });
        });
    }
  });
});

// Delete place by id 
router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
