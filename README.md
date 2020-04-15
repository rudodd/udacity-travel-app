# Rustin's Travel Planner

## What it does
Rustin's Travel Planner allows the user to add and remove trips.  It displays an image, a countodown, and weather information for the trips.

## How it works
The app uses a mix of localStorage and an an object at the server level to store data inputed by the user and APIs.

### API Calls
The app makles three API calls - geoCode(), getWeather(), and getImages()

  - The geoCode call simply fetches the longitude, laditude, and country from the geonames API for a given location
  - The getWeather function makes two different calls depending on the date of the trip, one gets historical info, and one gets forecast data from the weatherbits.io API
  - The getImages call simply searches the pixaby API for images related to the location using the location name as a keyword

### Local storage
The uses local storage to ensure that if the user leaves and returns the data from their previous session is still available.