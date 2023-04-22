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

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // Anything needed for the form
// });


// Shop
fetch('/src/json/clothing.json')
    .then(response => response.json())
    .then(data => {
        // Do something with the JSON data
        let itemsForSale = [];
        itemsForSale = data;
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching JSON data: ', error);
});

// function listItems() {
// for (let i = 0; i < itemsForSale.length; i++) {

// }
// }

// Get a reference to the div with an ID of "shopPage"
const shopPageDiv = document.getElementById("shopPage");

// Define the HTML code you want to inject
const html = `
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn">Go somewhere</a>
      </div>
    </div>
`;

// Inject the HTML code into the shopPageDiv using innerHTML
shopPageDiv.innerHTML = html;

// gallery

