const express = require("express");
const BodyParser = require("body-parser");
const user = require('./routes/user');
const mongoServer = require('./util/db');
const e = require("express");


require('dotenv').config({"path": "../.env"});

var app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

mongoServer();



//--here the endpoint
app.get('/', (req, res)=>{
  res.json('Service working');
});


app.use('/user', user);


app.listen(process.env.PORT, (req, res) => {
    console.log(`Login API listening at port ${process.env.PORT}`);
});
