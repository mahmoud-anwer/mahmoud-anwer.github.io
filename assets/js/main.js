document.addEventListener('DOMContentLoaded', function() {
    var pageUrl = document.body.getAttribute('data-page-url');

    // title auto typing
    const text = "Mahmoud Anwer";
    const typingText = document.querySelector('.title');
    console.log("value:", typingText);
    let index = 0;

    type();

    function type() {
        console.log("loaded");
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150); // Typing speed
        } else {
            // Pause for a moment before restarting
            setTimeout(() => {
                typingText.innerHTML = ''; // Clear the text
                index = 0; // Reset the index
                type(); // Restart the typing effect
            }, 1000); // Adjust the pause duration as needed
        }
    }
});



 // Sliding certificates
 let currentSlide = 0; // Initial slide index

// Function to move slides
function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    console.log(totalSlides);

    // Update current slide index
    currentSlide += direction;

    // Loop back to the first slide if we exceed the slide count
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Go to the first slide if at the last
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Go to the last slide if at the first
    }

    // Apply transformation to show the correct slide
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

//************************************************************* */
// For hamburger menu
function toggleMenu() {
    console.log('clicked');
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('open'); // Toggle the 'open' class
}


