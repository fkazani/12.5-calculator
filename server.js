// Creating express server
const express = require('express');
const app = express();
var mysql = require('mysql2');

// App to use the render files under public folder
app.use(express.static('public'));

// Setting the app to use ejs view engine
app.set('view engine', 'ejs');

// Configuration
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'E00md3sign',
  database : 'express'
});
 
// Get request to render the application
app.get("/", (req, res) => {
    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        
        console.log('The solution is: ', results[0].solution);
    });
 
    connection.end();

    res.render("index");
})

// Setting up port 3000 to listen the request
app.listen(3000);