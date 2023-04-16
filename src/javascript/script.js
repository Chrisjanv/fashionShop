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
let clothingArray =[];
// Retrieve clothing 'stock database'
fetch('/src/json/clothing.json')
    .then(response => response.json())
    .then(data => {
        // Parse the JSON data into a JavaScript object array
        clothingArray = data.clothing;
        console.log(clothingArray); // Print the clothing array to the console
    })
    .catch(error => {
        console.error('Error fetching JSON data: ', error);
    });

console.log(clothingArray[2]);
// Wait for the fetch function to complete before using the clothingArray data
setTimeout(() => {
    console.log(clothingArray[2]);
}, 1000); // Wait for 1 second to give time for the fetch function to complete

// gallery