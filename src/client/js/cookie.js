/**
 * Cookie functions for the app
 */

export const setCookie = (data)=> {
  var d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  var expires = d.toUTCString();
  const jsonData = JSON.stringify(data);
  document.cookie = `travel_app=${jsonData}; expires=${expires}; path=/`;
}

export const getCookie = ()=> {
  var name = 'travel_app=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

export const checkCookie = ()=> {
  if (getCookie('travel_app')) {
    return true;
  } else {
    return false;
  }
}