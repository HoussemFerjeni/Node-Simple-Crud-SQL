var mysql = require('mysql2'); 

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port : 8889, 
    database: "fds",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected FDS DATABASE");
  });

  module.exports = connection;