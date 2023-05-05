// Creating express server
import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize';
import entries from './models/entries.js';
import router from './routes/entries.js';
const { DataTypes } = Sequelize;
 
// Initialize express app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// App to use the render files under public folder
app.use(express.static('public'));

// Setting the app to use ejs view engine
app.set('view engine', 'ejs');
 
// Get request to render the application
app.get("/", (req, res) => {
    res.render("index");
})

// Setting up port 3000 to listen the request
app.listen(3000);


