// Back to top button scrolling and functionality
const topButton = document.getElementById("topButton");
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact form

// Shop
// Retrieve clothing 'stock database'
fetch('/src/json/clothing.json')
    .then(response => response.json())
    .then(data => {
        // Do something with the JSON data
        console.log(data); // Print the data to the console
    })
    .catch(error => {
        console.error('Error fetching JSON data: ', error);
});

// gallery





