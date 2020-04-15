/**
 * Helper Functions
 */

// Form Helpers
export const notEmpty = (field)=> {
  if (field.value.length) {
    return true;
  } else {
    return false;
  }
}

export const displayError = (field, message)=> {
  if (!field.classList.contains('error')) {
    const errorMessage = document.createElement('div');
    errorMessage.setAttribute('class', 'error-text');
    errorMessage.innerHTML = `<p>${message}</p>`;
    field.classList.add('error');
    field.parentNode.insertBefore(errorMessage, field);
  }
}

export const hideError = (field)=> {
  field.classList.remove('error');
  const errorMessage = field.previousSibling;
  if (errorMessage) {
    errorMessage.parentNode.removeChild(errorMessage);
  }
}

export const hideAddTripForm = ()=> {
  const locationInput = document.querySelector('#trip-location');
  const dateInput = document.querySelector('#trip-date');
  if (locationInput.classList.contains('error')) {
    hideError(locationInput);
  }
  if (dateInput.classList.contains('error')) {
    hideError(dateInput);
  }
  document.querySelector('#add-trip-container').classList.add('hidden');
}

export const clearForm = (formId)=> {
  document.getElementById(formId).reset();
}