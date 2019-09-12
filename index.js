// load configuration from .env with simple settings,
// if having more complexity keys, we can create some JSON file with validation for each environments
require('dotenv').config();
//
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const app__port = process.env.PORT;

//
app.use( bodyParser.urlencoded({ extended: false }) ); 
app.use( bodyParser.json() ); 
app.use( cors() );


app.use('/hotels', require('./src/hotel.route'));

app.listen(app__port, () => {
	console.log('Server ready at ' + app__port);
});