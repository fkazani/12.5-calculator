// Creating express server
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize';
import entries from './models/entries.js';
import db from './models/index.js';
// import router from './routes/entries.js';

const { DataTypes } = Sequelize;
 
// Initialize express app
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

// App to use the render files under public folder
app.use(cors(corsOptions));
app.use(express.static('public'));

// Parse request of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Setting the app to use ejs view engine
app.set('view engine', 'ejs');
 
// Get request to render the application
app.get("/", (req, res) => {
    res.render("index");
})

// Setting up port 3000 to listen the request
app.listen(3000);


