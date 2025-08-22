// Add click event listener to each timeline dot
const timelineDots = document.querySelectorAll('.timeline-dot');

timelineDots.forEach(dot => {
  dot.addEventListener('click', () => {
    // Toggle active class on the clicked dot (this shows/hides the content)
    dot.classList.toggle('active');
  });
});


// JavaScript to create an auto-scrolling image reel

let currentIndex = 0;
const images = document.querySelectorAll('.image-item');
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.transform = `translateX(-${index * 100}%)`;
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

// Set interval to change images every 3 seconds
// setInterval(nextImage, 3000);

// Optional: Add buttons to navigate through images manually (if desired)
document.querySelector('.prev-btn').addEventListener('click', prevImage);
document.querySelector('.next-btn').addEventListener('click', nextImage);



