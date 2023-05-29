// Importing the necessary modules
import { Sequelize } from 'sequelize';
import mysql from 'mysql2';
import { dbConfig } from '../config/db.config.js';
const { Model, DataTypes } = Sequelize;

// Creating the entries model
const entries = (sequelize, Sequelize) => {
  const Entries = sequelize.define('entries', {
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
  }); 

  return Entries;
};

export default entries;