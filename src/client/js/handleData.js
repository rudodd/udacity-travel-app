/**
 * Function to handle data
 */

export const getData = async()=> {
  let request = await fetch('/get-data');
  try {
    let data = await request.json();
    console.log(data);
    return data;
  } catch(error) {
    console.log(error);
  }
}

export const setUser = async (username)=> {
  const response = await fetch('/set-data', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'user': username.value }),
  });
  try {
    console.log(response);
  } catch(error) {
    console.log("Error posting data to the server", error);
  }
}

export const addTrip = async (location, date)=> {
  const response = await fetch('/add-trip', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'location': location, 'date': date }),
  });
  try {
    console.log(response);
  } catch(error) {
    console.log("Error posting data to the server", error);
  }
}

