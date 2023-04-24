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

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let itemsForSale = [];
fetch('/src/json/clothing.json')
    .then(response => response.json())
    .then(data => {


        itemsForSale = data;
        console.log(itemsForSale);
        let shopPage = document.getElementById('shopPage');
        
        // loop through the clothing items and create elements for each item
        data.clothing.forEach(item => {

            shopPage.classList.add('row');

            // create a div to hold the item
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.classList.add('col-m-12');
            itemDiv.classList.add('col-sm-4');

            // create an image element for the item
            const image = document.createElement('img');
            image.src = item.image;
            image.alt = item.name;
            image.classList.add('img-fluid');
            itemDiv.appendChild(image);

            // create a heading element for the item name
            const name = document.createElement('h3');
            name.textContent = item.name;
            itemDiv.appendChild(name);

            // create a paragraph element for the item price
            const price = document.createElement('p');
            price.textContent = 'R' + item.price.toFixed(2);
            itemDiv.appendChild(price);

            const buyBtn = document.createElement('div');
            buyBtn.classList.add('btn');
            buyBtn.textContent = 'Buy';
            itemDiv.appendChild(buyBtn);

            buyBtn.addEventListener('click', () => {
                addToCart(item);
            });

            const clearCartButton = document.getElementById("clearCartButton");
            clearCartButton.addEventListener('click', () => {
                clearCart();
            });

            // add the item to the shopPage
            shopPage.appendChild(itemDiv);
                        
        });
    })

    .catch(error => {
        console.error('Error fetching JSON data: ', error);

});

// CART
class Cart {
    constructor(product, price) {
        this.product = product;
        this.price = price;
    }
}

// Add to cart function
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // create a new cart object
    let cartItem = new Cart(item.name, item.price);

    // add the cart object to the cart array
    cart.push(cartItem);

    // save the updated cart array to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // confirm the item has been added to the cart
    alert(`${item.name} has been added to your cart!`);
}

function clearCart() {
    localStorage.removeItem('cart');
    console.log('Cart has been cleared!');
}
