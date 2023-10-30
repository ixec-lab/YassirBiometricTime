import mysql from 'mysql2'
import config from './ecosystem.js'

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
}).promise()

export default db