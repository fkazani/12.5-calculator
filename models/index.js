// Importing the necessary modules
import { Sequelize } from 'sequelize';
import mysql from 'mysql2';
import { dbConfig } from '../config/db.config.js';
// import entries from './models/entries.js';
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

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

//   db.entries = require('./entries.js');

  export default db;