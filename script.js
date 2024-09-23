const bannerImages = document.querySelector('.banner-images');
const images = document.querySelectorAll('.banner-images img');
let currentIndex = 0;
const scrollInterval = 5000; // Change image every 5 seconds
const transitionTime = 1000; // Transition time for scrolling effect

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length; // Cycle through images
  const offset = -currentIndex * 33.33; // Calculate the offset for the current image
  bannerImages.style.transition = `transform ${transitionTime}ms ease-in-out`; // Set transition time
  bannerImages.style.transform = `translateX(${offset}%)`; // Move the images
}

// Initial call to set the first image
changeBackground();
// Change image every 5 seconds
setInterval(changeBackground, scrollInterval);
