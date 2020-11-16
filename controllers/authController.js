const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../models");

// Signup

router.post("/api/signup", (req, res) => {
  const { email, password, username, location, skills, skateSince } = req.body;
//if passwords do are not present send back an error
  if (!email.trim() || !password.trim()) {
    res.status(400);
  } else {
  // hash the password and create User with specific body matching the User model 
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        console.log(hashedPassword);
        db.User.create({
          email: email,
          username: username,
          password: hashedPassword,
          location: location,
          skills: skills,
          skateSince: skateSince,
        })
          .then((newUser) => {
            const token = jwt.sign(
              {
                _id: newUser._id,
                email: newUser.email,
                username: username,
                location: location,
                skills: skills,
                skateSince: skateSince,
              },
              "secret"
            );
            res.json({
              error: false,
              data: token,
              message: "Successfully signed up.",
            });
          })
          .catch((err) => {
            res.status(500).json({
              error: true,
              data: null,
              message: "Unable to signup.",
            });
          });
      })
      .catch((err) => {
        res.status(500);
      });
  }
});

// Login

router.post("/api/login", (req, res) => {
  // Pull user provided email address and password from the body.
  const { emailAddress, password } = req.body;
  // See if there is a matching user in the database.
  db.User.findOne({ email: emailAddress })
    .then((foundUser) => {
      if (foundUser) {
  
        // If there is a matching user, compare the plaintext password with the stored, hashed password.
        bcrypt
          .compare(password, foundUser.password)
          .then(function (result) {
            if (result) {
              // If the passwords match, send back success.
   
              const token = jwt.sign(
                {
                  _id: foundUser._id,
                  email: foundUser.email,
                  username: foundUser.username,
                  skills: foundUser.skills,
                  location: foundUser.location,
                  skateSince: foundUser.skateSince,
                },
                "secret"
              );
              res.json({
                error: false,
                data: token,
                message: "Successfully logged in.",
              });
            } else {
              // If the passwords don't match, send back an error.
              res.status(401).json({
                error: true,
                data: null,
                message: "Failed to sign in.",
              });
            }
          })
          .catch((err) => {
            res.status(401).json({
              error: true,
              data: null,
              message: "Failed to sign in.",
            });
          });
      } else {
        res.status(401).json({
          error: true,
          data: null,
          message: "Failed to sign in.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to sign in.",
      });
    });
});

module.exports = router;
