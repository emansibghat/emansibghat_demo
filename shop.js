// Product data
const products = [
    { id: 1, name: "T-Shirt", price: 19.99 },
    { id: 2, name: "Jeans", price: 49.99 },
    { id: 3, name: "Sneakers", price: 79.99 },
    { id: 4, name: "Hat", price: 14.99 }
];

// Cart array to store added items
let cart = [];

// Function to add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartDisplay();
    }
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Clear previous cart items
    cartItems.innerHTML = '';
    
    // Add each item to the cart display
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
    });
    
    // Calculate and display total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}

// Function to handle "Add to Cart" button clicks
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        addToCart(productId);
    });
});