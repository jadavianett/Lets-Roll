const express = require("express");
const router = express.Router();
const db = require("../models");

// User Controller conatins routes to find,create and update user information 

//get all users 
router.get("/", (req, res) => {
  
  db.User.find({})    
    .then((foundUsers) => {
      res.json(foundUsers);
    });
});

// get a user by id 
router.get("/:id", (req, res) => {

  db.User.find({ _id: req.params.id }).then((foundUser) => {
    res.json(foundUser);
  });
});

//Create a new User reciver user information
router.post("/", (req, res) => {
  

  db.User.create(req.body).then((newUser) => {
   
    res.json(newUser);
  });
});




module.exports = router;