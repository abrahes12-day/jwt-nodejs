const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const db = require('./config/db.config');
const router = require('./routes/index');
require('dotenv').config()

const PORT = process.env.PORT || 3010;


//CONNECT TO DB
db.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

//CREATE TABLE
//db.sequelize.sync();

//MIDDLEWARE
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`SERVER CONNECTED ON PORT ${PORT}`);
});