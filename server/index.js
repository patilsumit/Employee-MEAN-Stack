const express = require('express');
const app = express();
const morgan = require('morgan'); // Logging

const todos = require('./Routes/Route');

//Use json middleware
app.use(express.json());
// Use the urlencoded middleware from express
// Parses request body in this form: key1=value1&key2=value2,
// and construct a json object
app.use(express.urlencoded({extended: true}));

app.use(morgan('tiny'));

// Use the route
app.use('/api/employees',todos);
app.use(express.static('dist/Employee-MEAN')); // Angular files are here

// Read PORT from env if set
const port = process.env.HTTP_PORT || 4000;
//listen on port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});