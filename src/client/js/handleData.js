/**
 * Function to handle data
 */

export const getData = async()=> {
  let request = await fetch('/get-data');
  try {
    let data = await request.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}

export const setData = async (data)=> {
  const response = await fetch('/set-data', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: data,
  });
  try {
    return response;
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
    return response;
  } catch(error) {
    console.log("Error posting data to the server", error);
  }
}

