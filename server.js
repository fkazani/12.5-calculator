// Creating express server
import express from 'express';
import mysql from 'mysql2';
import { Sequelize } from 'sequelize';
const { DataTypes } = Sequelize;
const app = express();

const sequelize = new Sequelize ('express', 'root', 'E00m$arch', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: mysql
});

const entries = sequelize.define('entries', {
  entry_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false
  },
  enteredAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  calculatedAmount: {
    type: DataTypes.DECIMAL(10, 2)
  }
}, 
{
  freezeTableName: true
});

entries.sync({ alter: true }).then((data) => {
  // Working with our updated table
  console.log("Table and model synced successfully");
}).catch((err) => {
  console.log("Error syncing the table and model");
})

// App to use the render files under public folder
app.use(express.static('public'));

// Setting the app to use ejs view engine
app.set('view engine', 'ejs');
 
// Get request to render the application
app.get("/", (req, res) => {
    // pool.connect();

    // pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    //     if (error) throw error;
        
    //     console.log('The solution is: ', results[0].solution);
    // });
 
    res.render("index");
})

// Setting up port 3000 to listen the request
app.listen(3000);