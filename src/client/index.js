import { notEmpty, displayError, hideError, hideAddTripForm, hideErrors } from './js/helpers'
import { setCookie, getCookie, checkCookie } from './js/cookie'
import { setData, getData, addTrip } from './js/handleData'
import { showOverlay, hideOverlay, loadPage } from './js/dom'
import './styles/resets.scss'
import './styles/helpers.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

document.addEventListener('DOMContentLoaded', ()=> {
  showOverlay();
  if (localStorage.getItem('travelData')) {
    const data = localStorage.getItem('travelData');
    setData(data);
    loadPage(true, data);
  } else {
    hideOverlay();
  }
});

document.querySelector('#username form button').addEventListener('click', (e)=> {
  e.preventDefault();
  let user = document.querySelector('#username form input[type=text]');
  if (notEmpty(user)) {
    setData(JSON.stringify({ 'user': user.value }))
    .then(function() {
      getData()
      .then(function(data) {
        localStorage.setItem('travelData', JSON.stringify(data));
        loadPage(false, data);
      });
    });
    hideError(user);
  } else {
    displayError(user, 'Please enter a username');
  }
});

// Add trip form
const location = document.querySelector('#trip-location');
const date = document.querySelector('#trip-date');
const addTripForm = document.querySelector('#add-trip');
document.querySelector('.nav button').addEventListener('click', function(e) {
  e.preventDefault();
  addTripForm.classList.remove('hidden');
});
document.querySelector('#add-trip .cancel').addEventListener('click', function(e) {
  e.preventDefault();
  hideAddTripForm();
});
document.querySelector('#add-trip .submit').addEventListener('click', function(e) {
  e.preventDefault();
  if (notEmpty(location) && notEmpty(date)) {
    hideAddTripForm();
    showOverlay();
    addTrip(location.value, date.value)
    .then(function() {
      getData()
      .then(function(data) {
        localStorage.setItem('travelData', JSON.stringify(data));
        hideOverlay();
      });
    });
  } else {
    if (!notEmpty(location)) {
      displayError(location, 'Please enter a city');
    }
    if (!notEmpty(date)) {
      displayError(date, 'Please enter a trip date');
    }
  }
});