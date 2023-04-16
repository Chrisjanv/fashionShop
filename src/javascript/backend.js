const clothingItems = [
    {
        name: "Men's T-Shirt",
        category: "men",
        price: 25.99,
        image: "tshirt.jpg",
        description: "This classic men's t-shirt is made from soft, breathable cotton and features a comfortable, relaxed fit.",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        name: "Women's Blouse",
        category: "women",
        price: 39.99,
        image: "blouse.jpg",
        description: "This stylish women's blouse is perfect for both work and play. It features a flattering cut and is made from lightweight, breathable fabric.",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        name: "Men's Jeans",
        category: "men",
        price: 49.99,
        image: "jeans.jpg",
        description: "These men's jeans are made from high-quality denim and feature a straight leg and classic 5-pocket styling.",
        sizes: ["28x30", "30x30", "32x30", "34x30", "36x30"]
    },
    {
        name: "Women's Dress",
        category: "women",
        price: 59.99,
        image: "dress.jpg",
        description: "This beautiful women's dress is perfect for any occasion. It features a flattering silhouette and a vibrant, eye-catching print.",
        sizes: ["XS", "S", "M", "L"]
    },
    {
        name: "Men's Hoodie",
        category: "men",
        price: 35.99,
        image: "hoodie.jpg",
        description: "This comfortable men's hoodie is made from soft, cozy fabric and features a kangaroo pocket and adjustable drawstring hood.",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        name: "Women's Skirt",
        category: "women",
        price: 29.99,
        image: "skirt.jpg",
        description: "This versatile women's skirt is made from lightweight fabric and features a flattering A-line shape and a comfortable elastic waistband.",
        sizes: ["XS", "S", "M", "L"]
    }
];

localStorage.setItem('clothingItems', JSON.stringify(clothingItems));
