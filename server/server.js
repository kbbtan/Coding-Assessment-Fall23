// Package Imports.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config({path: "../.env"});

// Router Imports.
const todoRouter = require('./routes/todoRouter');

// App Configuration.
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes.
app.use('/', todoRouter);

// Connect to DB.
mongoose.connect(process.env.MONGO_URI);

// Start app.
app.listen(port, () => {console.log(`Express is running on port ${port}`)});