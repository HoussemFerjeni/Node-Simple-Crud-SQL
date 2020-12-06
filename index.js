
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
 });

app.use(cors());
app.use(bodyParser.json({limit: '60mb'}));
app.use(bodyParser.urlencoded({limit: '60mb', extended: true}));




const user = require('./routes/user');
app.use('/api', user);
const freelance = require('./routes/freelance');
app.use('/api/freelance', freelance);



app.listen(3000 , () => console.log("Local FDS server is running "));