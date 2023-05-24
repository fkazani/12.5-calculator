import { Sequelize } from 'sequelize';
import mysql from 'mysql2';

export const dbConfig = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'E00m$arch',
    DB: 'express',
    dialect: 'mysql',
    dialectModule: mysql,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};