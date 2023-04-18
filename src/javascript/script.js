// Back to top button scrolling and functionality
const topButton = document.getElementById("topButton");
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact form
const form = document.getElementById('ContactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Anything needed for the form
});


// Shop
fetch('/src/json/clothing.json')
    .then(response => response.json())
    .then(data => {
        // Do something with the JSON data
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching JSON data: ', error);
    });

// gallery

