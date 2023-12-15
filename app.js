


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
  {
    id: 1,
    name: 'cincin toy story',
    image: 'cincin1.jpg',
    price: 120000
  },
  {
    id: 2,
    name: 'cincin toy story',
    image: 'cincin2.jpg',
    price: 120000
  },
  {
    id: 3,
    name: 'cincin toy story',
    image: 'cincin3.jpg',
    price: 220000
  },
  {
    id: 4,
    name: 'cincin toy story',
    image: 'cincin4.jpg',
    price: 123000
  },
  {
    id: 5,
    name: 'cincin toy story',
    image: 'cincin5.jpg',
    price: 320000
  },
  {
    id: 6,
    name: 'cincin toy story',
    image: 'cincin6.jpg',
    price: 123000
  },
  {
    id: 7,
    name: 'cincin toy story',
    image: 'cincin7.jpg',
    price: 320000
  },
  {
    id: 8,
    name: 'cincin toy story',
    image: 'cincin8.jpg',
    price: 123000
  }


];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  })
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = +1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
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


// Add this code below your existing JavaScript code
document.getElementById('sendWhatsAppButton').addEventListener('click', () => {
  let nomor = "+6288294606640"
  let message = ".menu saya ingin membeli :\n";
  listCards.forEach((value) => {
    message += `${value.name} x${value.quantity}, `;
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
      document.querySelector(selectedSection).scrollIntoView({ behavior: "smooth" });
    }
  });
});


// Add IDs to the links
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let back = document.getElementById('back');

// Define different sets of products for each page
let page1Products = [
  {
    id: 9,
    name: 'cincin toy story',
    image: 'cincin1.jpg',
    price: 120000
  },
  {
    id: 10,
    name: 'cincin toy story',
    image: 'cincin2.jpg',
    price: 120000
  },
  {
    id: 11,
    name: 'cincin toy story',
    image: 'cincin3.jpg',
    price: 220000
  },
  {
    id: 12,
    name: 'cincin toy story',
    image: 'cincin4.jpg',
    price: 123000
  },
  {
    id: 13,
    name: 'cincin toy story',
    image: 'cincin5.jpg',
    price: 320000
  },
  {
    id: 14,
    name: 'cincin toy story',
    image: 'cincin6.jpg',
    price: 123000
  },
  {
    id: 15,
    name: 'cincin toy story',
    image: 'cincin7.jpg',
    price: 320000
  },
  {
    id: 16,
    name: 'cincin toy story',
    image: 'cincin8.jpg',
    price: 123000
  }


  // Add more products for page 1
];

let page2Products = [
  {
    id: 17,
    name: 'gelang toy story',
    image: 'gelang1.jpg',
    price: 120000
  },
  {
    id: 18,
    name: 'gelang toy story',
    image: 'gelang2.jpg',
    price: 120000
  },
  {
    id: 19,
    name: 'gelang toy story',
    image: 'gelang3.jpg',
    price: 220000
  },
  {
    id: 20,
    name: 'gelang toy story',
    image: 'gelang4.jpg',
    price: 123000
  },
  {
    id: 21,
    name: 'gelang toy story',
    image: 'gelang5.jpg',
    price: 320000
  },
  {
    id: 22,
    name: 'gelang toy story',
    image: 'gelang6.jpg',
    price: 123000
  },
  {
    id: 23,
    name: 'gelang toy story',
    image: 'gelang7.jpg',
    price: 320000
  },
  {
    id: 24,
    name: 'gelang toy story',
    image: 'gelang8.jpg',
    price: 123000
  }
];



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
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}

// Initialize with the initial set of page2Products (page 1 products)
displayProducts(currentProducts);

// Function to add items to the card

   //tambahkan quantity dan price
   function addToCard(key){
      if(listCards[key] == null){
       listCards[key] = {...currentProducts[key]};
       listCards[key].id = key;
       listCards[key].quantity = 1;
       listCards[key].price = currentProducts[key].price;
       reloadCard();
      }else{
      
       reloadCard();
      }
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