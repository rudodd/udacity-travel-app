import { notEmpty, displayError, hideError } from './js/helpers'
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
  if (checkCookie()) {
    const data = getCookie();
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
        setCookie(data);
        loadPage(false, data);
      });
    });
    hideError(user);
  } else {
    displayError(user, 'Please enter a username');
  }
});

// Add trip form
const addTripForm = document.querySelector('#add-trip');
document.querySelector('.nav button').addEventListener('click', function(e) {
  e.preventDefault();
  addTripForm.classList.remove('hidden');
});
document.querySelector('#add-trip .cancel').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#add-trip input').value = null;
  addTripForm.classList.add('hidden');
});
document.querySelector('#add-trip .submit').addEventListener('click', function(e) {
  e.preventDefault();
  const location = document.querySelector('#trip-location').value;
  addTrip(location, '01/25/2021')
  .then(function() {
    getData()
    .then(function(data) {
      setCookie(data);
    });
  });
});