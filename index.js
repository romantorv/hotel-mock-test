// load configuration from .env with simple settings,
// if having more complexity keys, we can create some JSON file with validation for each environments
require('dotenv').config();
//
const express = require('express');
const app = express();
const app__port = process.env.PORT;

app.listen( app__port, () => {
	console.log('Server ready at '+ app__port);
});