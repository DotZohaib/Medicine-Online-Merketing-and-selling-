const express = require('express')
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require("path");

// Define storage for uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads'); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    const uniqueFilename = uuidv4(); // Generate unique filename using uuid
    cb(null, uniqueFilename + path.extname(file.originalname)); // Concatenate filename with timestamp and extension
  }
});
  
  const upload = multer({ storage: storage })

  module.exports =upload;