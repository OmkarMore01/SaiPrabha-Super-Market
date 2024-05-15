// Get all the product cards
const productCards = document.getElementsByClassName('product-card');

// Initialize the wishlist array and add it to local storage
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Add event listener to each product card
for (let i = 0; i < productCards.length; i++) {
  // Get the wishlist icon and add event listener to it
  const wishlistIcon = productCards[i].getElementsByClassName('wishlist-icon')[0];
  wishlistIcon.addEventListener('click', () => {
    // Toggle the product in the wishlist
    const productId = productCards[i].id.replace('product-card-', '');
    const productIndex = wishlist.findIndex((product) => product.id === parseInt(productId));
    if (productIndex !== -1) {
      wishlist.splice(productIndex, 1);
    } else {
      wishlist.push({ id: parseInt(productId), title: productCards[i].getElementsByClassName('product-title')[0].innerText, price: productCards[i].getElementsByClassName('product-price')[0].innerText });
    }
    // Update the wishlist in local storage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    // Toggle the wishlist icon
    wishlistIcon.classList.toggle('wishlisted');
  });

  // Get the add to cart button and add event listener to it
  const addToCartButton = productCards[i].getElementsByClassName('add-to-cart-button')[0];
  addToCartButton.addEventListener('click', () => {
    // Add the product to the cart
    const productId = productCards[i].id.replace('product-card-', '');
    const product = { id: parseInt(productId), title: productCards[i].getElementsByClassName('product-title')[0].innerText, price: productCards[i].getElementsByClassName('product-price')[0].innerText };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  });
}

// Initialize the cart array and add it to local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display the cart
const cartDisplay = document.getElementById('cart-display');
cartDisplay.innerHTML = `<h2>Cart (${cart.length})</h2><ul id="cart-list"></ul>`;
const cartList = document.getElementById('cart-list');
cart.forEach((product) => {
  cartList.innerHTML += `<li>${product.title} - ${product.price}</li>`;
});