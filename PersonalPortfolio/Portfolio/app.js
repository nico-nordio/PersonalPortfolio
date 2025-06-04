// Find all links inside the div with class "links"
const links = document.querySelectorAll('.links a');

// Add an event listener to each link
links.forEach(link => {
  link.addEventListener('click', function () {
    // Remove the "active" class from all links
    links.forEach(l => l.classList.remove('active'));

    // Add the "active" class only to the clicked link
    this.classList.add('active');
  });
});

// Add event listener to copy email to clipboard
document.getElementsByClassName('email')[0].addEventListener('click', function () {
  var emailText = "nordionicolo17@gmail.com";
  navigator.clipboard.writeText(emailText)
    .then(() => {
      alert('Email copied to clipboard: ' + emailText);
    })
    .catch((error) => {
      console.error('Failed to copy text: ', error);
    });
});

// Get the back-to-top element
const arrow = document.getElementById('back-to-top');

// Calculate the middle of the page
const middle = window.innerHeight / 2;

// Add event listener for click event
arrow.addEventListener('click', () => {
  // Smooth scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activecard", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activecard";
}
