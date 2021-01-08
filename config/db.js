var mysql = require('mysql'); 

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port : 8889, 
    database: "fds",
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected FDS DATABASE");
  });

  module.exports = connection;