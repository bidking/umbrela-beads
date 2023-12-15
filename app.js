let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-x')
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('fa-x')
    navbar.classList.remove('close')
}

let products = [
    // Regular
    {
        id: 1,
        name: 'cincin toy story',
        image: 'cincin1.jpg',
        category: 'regular',
        price: 120000
    },
    {
        id: 2,
        name: 'cincin toy story',
        image: 'cincin2.jpg',
        category: 'regular',
        price: 120000
    },
    {
        id: 3,
        name: 'cincin toy story',
        image: 'cincin3.jpg',
        category: 'regular',
        price: 220000
    },
    {
        id: 4,
        name: 'cincin toy story',
        image: 'cincin4.jpg',
        category: 'regular',
        price: 123000
    },
    {
        id: 5,
        name: 'cincin toy story',
        image: 'cincin5.jpg',
        category: 'regular',
        price: 320000
    },
    {
        id: 6,
        name: 'cincin toy story',
        image: 'cincin6.jpg',
        category: 'regular',
        price: 123000
    },
    {
        id: 7,
        name: 'cincin toy story',
        image: 'cincin7.jpg',
        category: 'regular',
        price: 320000
    },
    {
        id: 8,
        name: 'cincin toy story',
        image: 'cincin8.jpg',
        category: 'regular',
        price: 123000
    },
    // Product 1
    {
        id: 9,
        name: 'cincin toy story',
        image: 'cincin1.jpg',
        category: 'product1',
        price: 120000
    },
    {
        id: 10,
        name: 'cincin toy story',
        image: 'cincin2.jpg',
        category: 'product1',
        price: 120000
    },
    {
        id: 11,
        name: 'cincin toy story',
        image: 'cincin3.jpg',
        category: 'product1',
        price: 220000
    },
    {
        id: 12,
        name: 'cincin toy story',
        image: 'cincin4.jpg',
        category: 'product1',
        price: 123000
    },
    {
        id: 13,
        name: 'cincin toy story',
        image: 'cincin5.jpg',
        category: 'product1',
        price: 320000
    },
    {
        id: 14,
        name: 'cincin toy story',
        image: 'cincin6.jpg',
        category: 'product1',
        price: 123000
    },
    {
        id: 15,
        name: 'cincin toy story',
        image: 'cincin7.jpg',
        category: 'product1',
        price: 320000
    },
    {
        id: 16,
        name: 'cincin toy story',
        image: 'cincin8.jpg',
        category: 'product1',
        price: 123000
    },
    // Product 2
    {
        id: 17,
        name: 'gelang toy story',
        image: 'gelang1.jpg',
        category: 'product2',
        price: 120000
    },
    {
        id: 18,
        name: 'gelang toy story',
        image: 'gelang2.jpg',
        category: 'product2',
        price: 120000
    },
    {
        id: 19,
        name: 'gelang toy story',
        image: 'gelang3.jpg',
        category: 'product2',
        price: 220000
    },
    {
        id: 20,
        name: 'gelang toy story',
        image: 'gelang4.jpg',
        category: 'product2',
        price: 123000
    },
    {
        id: 21,
        name: 'gelang toy story',
        image: 'gelang5.jpg',
        category: 'product2',
        price: 320000
    },
    {
        id: 22,
        name: 'gelang toy story',
        image: 'gelang6.jpg',
        category: 'product2',
        price: 123000
    },
    {
        id: 23,
        name: 'gelang toy story',
        image: 'gelang7.jpg',
        category: 'product2',
        price: 320000
    },
    {
        id: 24,
        name: 'gelang toy story',
        image: 'gelang8.jpg',
        category: 'product2',
        price: 123000
    }
];

// Define different sets of products for each page
let page1Products = products.filter(function(product) {
    return product.category === 'product1';
});

let page2Products = products.filter(function(product) {
    return product.category === 'product2';
});

let listCards = [];

function initApp() {
    page1Products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${value.id})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        let product = getProductById(key)
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div id="${key}-${product.id}"><img src="image/${product.image}"/></div>
                <div>${product.name}</div>
                <div>${product.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

/**
 * Get the product by ID
 * @param payplugApi integer product id  
 * @return element of the product
 */
function getProductById(productId) {
  return products.find(function (product) {
    return product.id === productId;
  });
}

// Add this code below your existing JavaScript code
document.getElementById('sendWhatsAppButton').addEventListener('click', () => {
    let nomor = "+6288294606640"
    let message = ".menu saya ingin membeli :\n";
    console.log(listCards)
    listCards.forEach((value) => {
        message += `${products[value.id].name} x${value.quantity}, `;
    });
    message += `Total harga: ${total.innerText}\n`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${nomor}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});


document.addEventListener("DOMContentLoaded", function() {
    const sectionSelect = document.getElementById("sectionSelect");

    sectionSelect.addEventListener("change", function() {
        const selectedSection = sectionSelect.value;

        if (selectedSection) {
            // Use smooth scroll to navigate to the selected section
            document.querySelector(selectedSection).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Add IDs to the links
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let back = document.getElementById('back');

let currentProducts = page1Products; // Start with page 1 products

// Event listeners for page changes
page1.addEventListener('click', () => {
    currentProducts = page1Products;
    displayProducts(currentProducts);
});

page2.addEventListener('click', () => {
    currentProducts = page2Products;
    displayProducts(currentProducts);
});

page3.addEventListener('click', () => {
    currentProducts = page3Products;
    displayProducts(currentProducts);
});

back.addEventListener('click', () => {
    currentProducts = page1Products; // Go back to page 1 products
    displayProducts(currentProducts);
});


// Function to display products
function displayProducts(products) {
    list.innerHTML = ''; // Clear the current product list
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${value.id})">Add To Card</button>`;
        list.appendChild(newDiv);
    });
}

// Initialize with the initial set of page2Products (page 1 products)
displayProducts(currentProducts);

// Function to add items to the card

//tambahkan quantity dan price
function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = {
            ...currentProducts[key]
        };
        listCards[key].id = key;
        listCards[key].quantity = 1;
        listCards[key].price = products[key].price;
        reloadCard();
    } else {
        reloadCard();
    }
    console.log(listCards)
}



function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * currentProducts[key].price;
    }
    reloadCard();
}



document.getElementById("moveToPageButton").addEventListener("click", function() {
    // When the button is clicked, redirect the user to another page
    window.location.href = "kalkulator.html"; // Ganti "halamanlain.html" dengan nama file yang benar
});

window.addEventListener('DOMContentLoaded', event => {
    var lolo = function() {
        const navbarcollapsible = document.body.querySelector('#mainNav')
        if (!navbarcollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarcollapsible.classList.remove('lolo')
        } else {
            navbarcollapsible.classList.add('lolo')
        }
    }
    lolo();
    document.addEventListener('scroll', lolo)
})