// Bring in environment variables
const dotenv = require('dotenv');
dotenv.config();

// Setup fetch for node
const fetch = require('node-fetch');

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

// Get goecode data
const geoCode = async (location)=> {
  let response = await fetch(`http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=${process.env.GEO_API_USER}`);
  try {
    let data = await response.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}

// Get weather data
const getWeather = async (lat, lng, type, date = null)=> {
  let url;
  if (type == 'forecast') {
    url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&days=16&units=I&key=${process.env.WEATHER_API_KEY}`;
  } else if (type == 'historical') {
    url = `https://api.weatherbit.io/v2.0/normals?lat=${lat}&lon=${lng}&start_day=${date.getMonth()}-${date.getDate()}&end_day=${date.getMonth()}-${date.getDate()}&tp=daily&units=I&key=${process.env.WEATHER_API_KEY}`;
  }
  let response = await fetch(url);
  try {
    let data = await response.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}

// Get image
const getImage = async (location)=> {
  urlLocation = encodeURI(location);
  let response = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABY_API_KEY}&q=city+${urlLocation}&orientation=horizontal&category=places&order=popular&image_type=photo`);
  try {
    let data = await response.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}

// Add a trip to the data object
const addTrip = (req, res)=> {
  let tripId = uuidv4();
  if (req.body.id) {
    tripId = req.body.id;
  }
  const tripLocation = req.body.location;
  const tripDate = new Date(req.body.date);
  let trip;
  geoCode(tripLocation)
    .then(function(data) {
      let first = true;
      for (location of data.geonames) {
        if (first) {
          trip = { 'location': location.toponymName, 'country': location.countryName, 'lng': location.lng, 'lat': location.lat, 'date': tripDate };
          first = false;
        }
      }
      getImage(trip.location, trip.country)
      .then(function(data) {
        if (data.totalHits > 0) {
          let first = true;
          for (image of data.hits) {
            if (first = true) {
              trip.image = image.webformatURL;
              first = false;
            }
          }
        } else {
          trip.image = 'https://pixabay.com/get/57e1d6434d51ad14f1dc84609629317e113fd7e5544c704c7d2973dc954dc758_640.jpg';
        }
        const d = new Date();
        d.setDate(d.getDate()+16);
        if (trip.date <= d) {
          getWeather(trip.lat, trip.lng, 'forecast')
          .then(function(data) {
            i = 0;
            weatherData = {};
            for(forecast of data.data) {
              if (new Date(forecast.valid_date) >= trip.date && i < 5) {
                weatherData[forecast.valid_date] = forecast;
                i++;
              }
            }
            trip.weather = { 'type': 'forecast', 'data': weatherData };
            if (!appData.trips) {
              appData.trips = {};
            }
            appData.trips[tripId] = trip
            res.send('Trip added');
          });
        } else {
          getWeather(trip.lat, trip.lng, 'historical', trip.date)
          .then(function(data) {
            trip.weather = { 'type': 'historical', 'data': data };
            if (!appData.trips) {
              appData.trips = {};
            }
            appData.trips[tripId] = trip
            res.send('Trip added');
          })
        }
      });
    });
}

// Routes
app.post('/set-data', setData);
app.get('/get-data', function (req, res) {
  res.send(appData);
});
app.post('/add-trip', addTrip);
