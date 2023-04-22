// Back to top button scrolling and functionality
const topButton = document.getElementById("topButton");
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact form
// const form = document.getElementById('ContactForm');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // Anything needed for the form
// });


// Shop
fetch('/src/json/clothing.json')
    .then(response => response.json())
    .then(data => {

        let itemsForSale = [];
        itemsForSale = data;
        console.log(itemsForSale);

        // loop through the clothing items and create elements for each item
        data.clothing.forEach(item => {
            // create a div to hold the item
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            // create an image element for the item
            const image = document.createElement('img');
            image.src = item.image;
            image.alt = item.name;
            image.width = 300;
            image.classList.add('img-thumbnail');
            itemDiv.appendChild(image);

            // create a heading element for the item name
            const name = document.createElement('h3');
            name.textContent = item.name;
            itemDiv.appendChild(name);

            // create a paragraph element for the item price
            const price = document.createElement('p');
            price.textContent = '$' + item.price.toFixed(2);
            itemDiv.appendChild(price);

            // add the item to the shopPage
            shopPage.appendChild(itemDiv);
        });
    })

    .catch(error => {
        console.error('Error fetching JSON data: ', error);
});