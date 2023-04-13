const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photoArray = [];

//Unsplash API
const count = 10;
const apiKey = `Jqb8XX2NExXP5f-H9lyRhhCfNJrtN_HeNV8ca95TGpk`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Helper Functions
function setAttribute(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Get photos from Unsplash API
function displayPhotos() {
  photoArray.forEach((photo) => {
    const item = document.createElement("a");

    setAttribute(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // create <img> for photo
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);

    setAttribute(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a> then put both inside image_container element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
// Create Elements For Links and Photos

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    displayPhotos();
  } catch (error) {
    //catch error
    console.log(`fix it`);
  }
}

// On load

getPhotos();
