const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Function to show the slide at the given index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
        indicators[i].classList.remove('active'); // Remove active class from all
    });
    indicators[index].classList.add('active'); // Add active class to current indicator
}

// Previous button functionality
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Move to previous slide
    showSlide(currentIndex);
});

// Next button functionality
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Move to next slide
    showSlide(currentIndex);
});

// Auto-slide functionality
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
    showSlide(currentIndex);
}, 10000); // 10 seconds for each slide

// Initial slide display
showSlide(currentIndex);


