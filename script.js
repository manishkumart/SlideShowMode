const slideshowElement = document.getElementById('slideshow-image');
let images = [];
let currentIndex = 0;

// Function to change the image
function changeImage() {
    slideshowElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}

// Fetch images from the backend
fetch('/images')
    .then(response => response.json())
    .then(data => {
        images = data;
        changeImage(); // Display the first image
        
        // Change image every 5 seconds
        setInterval(changeImage, 5000);
    })
    .catch(error => console.error('Error fetching images:', error));
