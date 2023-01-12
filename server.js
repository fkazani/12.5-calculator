// Creating express server
const express = require('express');
const app = express();

// Setting the app to use ejs view engine
app.set('view engine', 'ejs');

// App to use the render files under public folder
app.use(express.static('public'));

// Get request to render the application
app.get("/", (req, res) => {
    res.render("index");
})

// Setting up port 3000 to listen the request
app.listen(3000);