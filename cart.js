console.log("sowmya hiii");
// Initialize an empty cart array
let cart = [];

// Function to add items to the cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    alert('Product added to cart!');
}

// Function to display the cart on cart.html
function displayCart() {
    // Redirect to the cart page and pass cart data as a query parameter
    window.location.href = `cart.html?cart=${encodeURIComponent(JSON.stringify(cart))}`;
}
