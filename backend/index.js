import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './config/database.js';

dotenv.config({
    path: ".env"
})


databaseConnection();
const app = express();
const PORT = 8080;

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
})
