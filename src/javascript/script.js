// Back to top button scrolling and functionality
const topButton = document.getElementById("topButton");
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact form
// Not working as it is not connected to back end, no code needed yet.

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

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            displayCart(cart);
            cartAmount();                        
        });
    })

    .catch(error => {
        console.error('Error fetching JSON data: ', error);

});

// Special products

fetch('/src/json/clothing.json')
    .then(response => response.json())
    .then(data => {
        let array = data;
        

        // ...
    })
    .catch(error => {
        console.error('Error fetching JSON data: ', error);
    });

// CART
// Add to cart function
function addToCart(item) {
    class Cart {
        constructor(product, price) {
            this.product = product;
            this.price = price;
        }
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // create a new cart object
    let cartItem = new Cart(item.name, item.price);

    // add the cart object to the cart array
    cart.push(cartItem);

    // save the updated cart array to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    displayCart(cart);
    cartAmount();
}

function clearCart() {
    if (localStorage.getItem('cart')) {
        localStorage.removeItem('cart');
        console.log('Cart has been cleared!');
        displayCart([]);
        cartAmount();
    } else {
        console.log('Cart is already empty!');
    }
}

function displayCart(cart) {
    const cartBody = document.getElementById('cartBody');
    cartBody.innerHTML = '';

    if (cart.length === 0) {
        cartBody.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        const table = document.createElement('table');
        table.classList.add('table');
        table.classList.add('table-striped');

        // Create table header
        const header = document.createElement('tr');
        const productHeader = document.createElement('th');
        productHeader.textContent = 'Product';
        const priceHeader = document.createElement('th');
        priceHeader.textContent = 'Price';
        header.appendChild(productHeader);
        header.appendChild(priceHeader);
        table.appendChild(header);

        // Add table rows for each item in the cart
        cart.forEach(item => {
            const row = document.createElement('tr');
            const product = document.createElement('td');
            product.textContent = item.product;
            const price = document.createElement('td');
            price.textContent = 'R' + item.price.toFixed(2);
            row.appendChild(product);
            row.appendChild(price);
            table.appendChild(row);
        });

        // Add table to the cart body
        cartBody.appendChild(table);
    }
}

function cartAmount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let amount = cart.length;
    let cartAmount = document.getElementById('cart');
    cartAmount.textContent = `Cart (${amount})`;
}

// Gallery (Very long way, but works)
const image1 = document.getElementById('galleryImage1');
const image2 = document.getElementById('galleryImage2');
const image3 = document.getElementById('galleryImage3');
const image4 = document.getElementById('galleryImage4');
const image5 = document.getElementById('galleryImage5');
const image6 = document.getElementById('galleryImage6');

function fullScreen(image) {
    let fullscreenImage = document.createElement('img');
    fullscreenImage.src = image.src;

    let fullscreenDiv = document.createElement('div');
    fullscreenDiv.style.position = 'fixed';
    fullscreenDiv.style.top = '0';
    fullscreenDiv.style.left = '0';
    fullscreenDiv.style.width = '100%';
    fullscreenDiv.style.height = '100%';
    fullscreenDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    fullscreenDiv.style.zIndex = '9999';
    fullscreenDiv.style.display = 'flex';
    fullscreenDiv.style.justifyContent = 'center';
    fullscreenDiv.style.alignItems = 'center';
    fullscreenDiv.appendChild(fullscreenImage);

    let exitButton = document.createElement('button');
    exitButton.innerHTML = 'X';
    exitButton.style.position = 'absolute';
    exitButton.style.top = '10px';
    exitButton.style.right = '10px';
    exitButton.style.backgroundColor = 'transparent';
    exitButton.style.border = 'none';
    exitButton.style.color = '#fff';
    exitButton.style.fontSize = '24px';
    exitButton.style.cursor = 'pointer';
    exitButton.addEventListener('click', function () {
        document.body.removeChild(fullscreenDiv);
    });
    fullscreenDiv.appendChild(exitButton);

    document.body.appendChild(fullscreenDiv);
}
image1.addEventListener('click', function () {
    fullScreen(image1);
});
image2.addEventListener('click', function () {
    fullScreen(image2);
});
image3.addEventListener('click', function () {
    fullScreen(image3);
});
image4.addEventListener('click', function () {
    fullScreen(image4);
});
image5.addEventListener('click', function () {
    fullScreen(image5);
});
image6.addEventListener('click', function () {
    fullScreen(image6);
});

