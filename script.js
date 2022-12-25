//Unsplash API
const count = 10;
const apiKey = `u7d4w59AkyEWY3y_fS5gxesakg2w6JRdzwYnmwL8hMQ`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //catch error
    console.log(`fix it`);
  }
}

// On load

getPhotos();
