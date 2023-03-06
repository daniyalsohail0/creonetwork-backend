// import modules

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/user-routes');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// app

const app = express();

// db

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected."))
.catch((err) => console.log("Database connection error.", err))

// middleware

app.use(cookieParser());
app.use(morgan('dev'))
app.use(cors({origin:true, credentials: true}));
app.use(express.json());
app.use('/api', router);

// routes

const testRoutes = require('./routes/test');
app.use('/', testRoutes)

// port

const port = process.env.PORT || 8080;

// listener

const server = app.listen(
    port,
    () => console.log(`Server is running on port ${port}`)
);