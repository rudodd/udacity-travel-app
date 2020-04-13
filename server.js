// Bring in environment variables
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')

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

let appData = {};
const setData = (req, res)=> {
  console.log(req.body);
  appData = req.body;
  res.send('Data set');
}

// Great solution for UUID found on Stack Overflow - https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const addTrip = (req, res)=> {
  const tripId = uuidv4();
  const tripLocation = req.body.location;
  const tripDate = req.body.date;
  const trip = { 'location': tripLocation, 'date': tripDate };
  if (!appData.trips) {
    appData.trips = {};
  }
  appData.trips[tripId] = trip
  res.send('Trip added');
  console.log(appData);
}

app.post('/set-data', setData);

app.get('/get-data', function (req, res) {
  console.log(appData);
  res.send(appData);
});

app.post('/add-trip', addTrip);
