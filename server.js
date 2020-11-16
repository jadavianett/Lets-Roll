// Imported required packages to run an express server and communicate with our databse 
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');


//connecting to our Port 
const PORT = process.env.PORT || 3001;

// declaring express as app 
const app = express();

// Defined middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
app.use(bodyParser.json());

// requiring controllers and defining them 
const UserController = require("./controllers/userController");
const PlaceController = require("./controllers/placeController");
const AuthController = require("./controllers/authController");

//connection to Mongo DB 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my-mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


//checking to make sure that the mongoose connection was sucessful 
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});


// BackEnd API and View Routes 
app.use(AuthController);
app.use("/api/user", UserController);
app.use("/api/places", PlaceController);


//Default static route if no matching route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
