const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const crypto = require("crypto");
const nodemailer = require("nodemailer");

// Create an instance of the Express app
const app = express();

// Set the port for the server to listen on
const port = 8000;

// Import and use the CORS middleware to handle Cross-Origin Resource Sharing
const cors = require("cors");
app.use(cors());

// Set up middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import the JSON Web Token (JWT) library
const jwt = require("jsonwebtoken");

// Connect to the MongoDB database
mongoose.connect("mongodb+srv://tanjimac00:amazon_rn@cluster0.yr1lsey.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });


app.listen(port,() => {
    console.log("Server is running on port 8000")
});