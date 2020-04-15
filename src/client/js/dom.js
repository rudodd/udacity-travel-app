/**
 * Dom Manipulation Functions
 */

import { getData, setData } from './handleData'

// Show / hide overlay
export const showOverlay = ()=> {
  document.querySelector('.overlay').classList.add('show');
}

export const hideOverlay = ()=> {
  document.querySelector('.overlay').classList.remove('show');
}

// Load page function for various dom manipulations
export const loadPage = async (localData = false, data)=> {
  if (localData) {
    await setupPage(JSON.parse(data), 'Welcome back,');
    try {
      hideOverlay();
    } catch(error) {
      console.log(error);
    }
  } else {
    await setupPage(data, 'Hi');
    try {
      hideOverlay();
    } catch(error) {
      console.log(error);
    }
  }
}

// Create various DOM elements based on the data provided
function setupPage(data, message) {
  return new Promise(resolve => {
    document.querySelector('#username').classList.add('hidden');

    // Setup the welcome message
    if (document.querySelector('#welcome-message')) {
      const welcomeMessage = document.querySelector('#welcome-message');
      welcomeMessage.innerText = `${message} ${data.user}`;
      if (welcomeMessage.classList.contains('hidden')) {
        welcomeMessage.classList.remove('hidden');
      }
    }

    // Setup the trip list container
    if (!document.querySelector('.trip-list-container')) {
      const tripContainer = document.createElement('div');
      tripContainer.classList.add('trip-list-container');
      const tripListHeader = document.createElement('h3');
      tripListHeader.classList.add('trip-list-header');
      tripListHeader.innerText = 'Your upcoming trips:';
      tripContainer.appendChild(tripListHeader);
      document.querySelector('#main').appendChild(tripContainer);
    }

    // Unhide the add a trip button
    if (document.querySelector('.nav button').classList.contains('hidden')) {
      document.querySelector('.nav button').classList.remove('hidden');
    }

    // Add trips to DOM
    if (data.trips) {
      const loadTrips = async (data)=> {
        await addTripsToDom(data);
        try {
          resolve();
        } catch(error) {
          console.log(error);
        }
      }
      loadTrips(data);
    } else {
      const noTrips = document.createElement('p');
      noTrips.classList.add('no-results');
      noTrips.innerText = `You haven't added any trips yet.  Add a trip to see it here.`;
      if (!document.querySelector('.trip-list-container')) {
        tripContainer.appendChild(noTrips);
      } else {
        document.querySelector('.trip-list-container').appendChild(noTrips);
      }
      resolve();
    }
  });
}

// Add new trips to the DOM
export const addTripsToDom = (data)=> {
  return new Promise(resolve => {
    const trips = Object.entries(data.trips);
    for (const trip of trips) {
      if (!document.getElementById(trip[0])) {

        // Setup dates
        const todayDate = new Date();
        const tripDate = new Date(trip[1].date);
        const difference = new Date() - tripDate;
        const countdown = Math.round(-(difference / (1000 * 3600 * 24))+1);

        // Set expired
        const expired = tripDate < todayDate ? true : false;

        // Setup container div
        const tripDiv = document.createElement('div');
        tripDiv.setAttribute('id', trip[0]);
        tripDiv.classList.add('trip-container');

        // Setup image
        const tripImageContainer = document.createElement('div');
        tripImageContainer.classList.add('trip-image');
        const tripImage = new Image();
        tripImage.src = trip[1].image;
        const tripCountdown = document.createElement('p');
        tripCountdown.classList.add('countdown');
        tripCountdown.innerText = `Your ${trip[1].location} trip is ${countdown} days away`;
        tripImageContainer.appendChild(tripImage);
        tripImageContainer.appendChild(tripCountdown);

        // Setup info div
        const tripInfo = document.createElement('div');
        tripInfo.classList.add('trip-info');
        tripInfo.innerHTML =
         `<h4 class="trip-title">${trip[1].location}</h4>
          <p class="trip-date">This trip begins: ${tripDate.getMonth()+1}/${tripDate.getDate()}/${tripDate.getFullYear()}</p>`;

                  // Setup remove button
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.innerHTML = '<i class="fas fa-minus-circle"></i> Remove Trip';
        removeButton.addEventListener('click', function(e) {
          removeTrip(e);
        });


        // Setup expired div and determine where remove button should go
        if (expired) {
          const expiredDiv = document.createElement('div');
          expiredDiv.classList.add('trip-expired');
          const expiredMessage = document.createElement('div');
          expiredMessage.innerHTML = '<p>This trip has passed</p>';
          expiredMessage.appendChild(removeButton);
          expiredDiv.appendChild(expiredMessage);
          tripDiv.appendChild(expiredDiv);
        } else {
          tripInfo.appendChild(removeButton);
        }

        // Setup weather
        if (!expired) {
          if (trip[1].weather.type == 'forecast') {
            const tripWeather = document.createElement('div');
            tripWeather.classList.add('trip-weather');
            const weatherContainer = document.createElement('div');
            weatherContainer.classList.add('weather-container');
            const days = Object.entries(trip[1].weather.data);
            let dayCount = 0;
            for (const day of days) {
              const weatherDay = document.createElement('div');
              weatherDay.classList.add('weather-day');
              const forecastDay = new Date(day[0]);
              const forecastDesc = day[1].weather.description;
              const forecastIcon = new Image();
              forecastIcon.src = ` https://www.weatherbit.io/static/img/icons/${day[1].weather.icon}.png`;
              weatherDay.innerHTML =
               `<p class="weather-date">${forecastDay.getMonth()+1}/${forecastDay.getDate()}</p>
                <p class="weather-desc">${forecastDesc}</p>`;
              forecastIcon.onload = function() {
                weatherDay.appendChild(forecastIcon);
              };
              weatherContainer.appendChild(weatherDay);
              dayCount++;
            }
            const weatherTitle = document.createElement('h5');
            weatherTitle.innerText = `Your ${dayCount} day forecast:`;
            tripWeather.appendChild(weatherTitle);
            tripWeather.appendChild(weatherContainer);
            tripInfo.appendChild(tripWeather);
          } else {
            const tripWeather = document.createElement('div');
            tripWeather.classList.add('trip-weather');
            const weatherContainer = document.createElement('div');
            weatherContainer.classList.add('weather-container');
            weatherContainer.innerHTML =
             `<div class="weather-day">
                <p class="weather-type">Temp</p>
                <p class="weather-stat">${Math.round(trip[1].weather.data.data[0].temp)}&deg;</p>
              </div>
              <div class="weather-day">
                <p class="weather-type">Rainfall</p>
                <p class="weather-stat">${trip[1].weather.data.data[0].precip} in.</p>
              </div>`
            const weatherTitle = document.createElement('h5');
            weatherTitle.innerText = `Typical weather during your stay:`;
            tripWeather.appendChild(weatherTitle);
            tripWeather.appendChild(weatherContainer);
            tripInfo.appendChild(tripWeather);
          }
        }

        // Put it all together
        tripImage.onload = function() {
          if (document.querySelector('.no-results')) {
            document.querySelector('.no-results').remove();
          }
          tripDiv.appendChild(tripImageContainer);
          tripDiv.appendChild(tripInfo);
          document.querySelector('.trip-list-container').appendChild(tripDiv);
        }
      }
    }
  resolve();
  });
}

// Remove existing trips from the DOM
const removeTrip = (e)=> {
  showOverlay();
  let tripId;
  if (e.target.parentElement.parentElement.classList.contains('trip-expired')) {
    tripId = e.target.parentElement.parentElement.parentElement.getAttribute('id');
  } else {
    tripId = e.target.parentElement.parentElement.getAttribute('id');
  }
  getData()
    .then(function(data) {
      const trips = data.trips;
      delete trips[tripId];
      data.trips = trips;
      if (Object.keys(data.trips).length === 0) {
        delete data.trips;
        loadPage(true, JSON.stringify(data));
      }
      const tripDiv = document.getElementById(tripId);
      tripDiv.parentElement.removeChild(tripDiv);
      localStorage.setItem('travelData', JSON.stringify(data));
      setData(JSON.stringify(data));
    });
}