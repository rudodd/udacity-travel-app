let appData = {};

// Bring in environment variables
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')

// Aylien setup
var aylien = require('aylien_textapi')
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

const setData = (req, res)=> {
  if (req.body.user.length) {
    appData['user'] = req.body.user;
  }
  res.send('Data set');
}

app.post('/set-data', setData);

app.get('/get-data', function (req, res) {
  console.log(appData);
  res.send(appData);
});
