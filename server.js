// Creating express server
import express from 'express';
import mysql from 'mysql2';
const app = express();

// Configuration
const pool = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'E00md3sign',
  database : 'express'
});

// App to use the render files under public folder
app.use(express.static('public'));

// Setting the app to use ejs view engine
app.set('view engine', 'ejs');
 
// Get request to render the application
app.get("/", (req, res) => {
    pool.connect();

    pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        
        console.log('The solution is: ', results[0].solution);
    });
 
    res.render("index");
})

// Setting up port 3000 to listen the request
app.listen(3000);