// Importing the necessary modules
import { Sequelize } from 'sequelize';
import mysql from 'mysql2';
const { Model, DataTypes } = Sequelize;

// Connect to MySQL database using Swquelize
const sequelize = new Sequelize ('express', 'root', 'E00m$arch', {
    host: 'localhost',
    dialect: 'mysql',
    dialectModule: mysql
  });

// Creating the entries model
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

  export default entries;