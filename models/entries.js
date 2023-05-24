// Importing the necessary modules
import { Sequelize } from 'sequelize';
import mysql from 'mysql2';
import { dbConfig } from '../config/db.config.js';
const { Model, DataTypes } = Sequelize;

// Connect to MySQL database using Swquelize
const sequelize = new Sequelize (dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    dialectModule: dbConfig.dialectModule,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min, 
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
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
  }
);

// Syncing db table with new and updated entries
entries.sequelize.sync({ force: true }).then((data) => {
  // Working with our updated table
  console.log("Dropped and re-synced db successfully");
}).catch((err) => {
  console.log("Error syncing the table and model");
})

export default entries;