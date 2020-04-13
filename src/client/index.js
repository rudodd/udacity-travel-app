import { notEmpty, displayError, hideError } from './js/helpers'
import { setCookie, getCookie, checkCookie } from './js/cookie'
import { setUser, getData } from './js/handleData'
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
    loadPage(true, data);
  } else {
    hideOverlay();
  }
});

document.querySelector('#username form button').addEventListener('click', (e)=> {
  e.preventDefault();
  let user = document.querySelector('#username form input[type=text]');
  if (notEmpty(user)) {
    hideError(user);
    setUser(user)
    .then(function() {
      getData()
      .then(function(data) {
        setCookie(data);
        loadPage(false, data);
      });
    });
  } else {
    displayError(user, 'Please enter a username');
  }
});
