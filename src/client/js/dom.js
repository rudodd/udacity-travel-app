/**
 * Dom Manipulation Functions
 */

export const showOverlay = ()=> {
  document.querySelector('.overlay').classList.add('show');
}

export const hideOverlay = ()=> {
  document.querySelector('.overlay').classList.remove('show');
}

export const loadPage = async (cookie = false, data)=> {
  if (cookie) {
    await setupPage(JSON.parse(data), 'Welcome back');
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

function setupPage(data, message) {
  return new Promise(resolve => {
    document.querySelector('#username').classList.add('hidden');

    // Setup the welcome message
    const welcomeMessage = document.querySelector('#welome-message');
    welcomeMessage.innerText = `${message} ${data.user}.`;
    welcomeMessage.classList.remove('hidden');

    // Setup the trip list container
    const tripContainer = document.createElement('div');
    tripContainer.classList.add('trip-list-container');
    const tripListHeader = document.createElement('h3');
    tripListHeader.classList.add('trip-list-header');
    tripListHeader.innerText = 'Your Trips:';
    tripContainer.appendChild(tripListHeader);
    document.querySelector('#main').appendChild(tripContainer);

    // Unhide the add a trip button
    document.querySelector('.nav button').classList.remove('hidden');
    resolve();
  });
}