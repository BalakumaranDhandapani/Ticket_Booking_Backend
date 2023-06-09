const routes = require("./Routes/routes")
require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URI;

const PORT = process.env.PORT || 5005;
mongoose.connect(mongoString, { useNewUrlParser: true });
const database = mongoose.connection;

const app = express();

app.use(express.json());

app.use('/', routes);

//database.on means it will connect to the database, and throws any error if the connection fails.
database.on("error", (error) => {
    console.log(error);
});

//database.once means it will run only one time. 
//If it is successful, it will show a message that says Database Connected.
database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(PORT, () => {
    console.log('Server running at ${5005}')
})