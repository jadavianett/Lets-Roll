const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  // Check for user-provided token.
  // If token, decode it.
  // If valid token, find books.
  // Else 401
  //   console.log(req.headers);
  //   if (!req.headers.authorization) {
  //     return res.status(401).json({
  //       error: true,
  //       data: null,
  //       message: "Unauthorized.",
  //     });
  //   }
  //   jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(401).json({
  //         error: true,
  //         data: null,
  //         message: "Invalid token.",
  //       });
  //     } else {
  //   console.log(decoded);

  db.Place.find({})
    // .populate("author", "firstName lastName")
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
  // }
  //   });
});

router.get("/:id", (req, res) => {
  db.Place.findOne({ _id: req.params.id })
    // .populate("author")
    .then((foundPlace) => {
      res.json(foundPlace);
    });
});

router.post("/", (req, res) => {
  //   console.log(req.headers);
  //   if (!req.headers.authorization) {
  //     return res.status(401).json({
  //       error: true,
  //       data: null,
  //       message: "Unauthorized.",
  //     });
  //   }
  //   jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(401).json({
  //         error: true,
  //         data: null,
  //         message: "Invalid token.",
  //       });
  //     } else {
  //       console.log(decoded);
  const newPlace = {
    name: req.body.name,
    location: req.body.location,
    type: req.body.type,
    // creatorId: decoded._id,
  };
  db.Place.create(newPlace).then((newPlace) => {
    res.json(newPlace);
  });
  // }
  //   });
});

router.put("/:id", (req, res) => {
  // To update a book, you must pass in an authorization header.
  // If no authorization header is provided, return 401.
  //   if (!req.headers.authorization) {
  //     return res.status(401).json({
  //       error: true,
  //       data: null,
  //       message: "Unauthorized.",
  //     });
  //   }
  // If jwt is provided as an authorization header, make sure it is valid.
  //   jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
  // If jwt is invalid (for any reason) return 401.
  // if (err) {
  //   console.log(err);
  //   return res.status(401).json({
  //     error: true,
  //     data: null,
  //     message: "Invalid token.",
  //   });
  // } else {
  // If jwt is valid, pull the allowable fields from the body and update the book.
  //   console.log(decoded);
  const updatedPlace = {
    name: req.body.name,
    location: req.body.location,
    type: req.body.type,
  };
  // Restrict updates where the creatorId is equal to the user-provided token _id.
  db.Place.findOneAndUpdate(
    // { _id: req.params.id, creatorId: decoded._id },
    { _id: req.params.id },
    updatedPlace,
    { new: true }
  )
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
  // }
  //   });
});

router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
