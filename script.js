const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 30;
let photoArray = [];

//Unsplash API
const count = 30;
const apiUrl = "YOUR_API_URL";
const apiKey = "YOUR_API_KEY";

let imageLoadedCount = 0; // Renamed from imageLoaded to avoid conflict with function

function imageLoaded() {
  // Image has finished loading
  console.log("images loaded");
  imageLoadedCount++;
  console.log(imageLoadedCount);
  if (imageLoadedCount === totalImages) {
    ready = true;
    loader.hidden = true;
    console.log("ready =", ready);
  }
}

function setAttribute(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function displayPhotos() {
  imageLoadedCount = 0; // Reset the count each time new photos are displayed
  totalImages = photoArray.length;
  console.log("total images", totalImages);
  photoArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttribute(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");
    setAttribute(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    img.addEventListener("load", imageLoaded);

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.error("An error occurred while fetching photos", error);
  }
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
