// Main JavaScript file for the project

// Function to handle cart functionality
// تخزين السلة في localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Kids Store Functionality
let kidsCart = JSON.parse(localStorage.getItem('kidsCart')) || [];

// Women's Store Functionality
let womensCart = JSON.parse(localStorage.getItem('womensCart')) || [];

// Brands Store Functionality
let brandsCart = JSON.parse(localStorage.getItem('brandsCart')) || [];

// Function to update cart UI
// تحديث واجهة السلة
function updateCartUI() {
    // Select cart button and cart items container
    const cartButton = document.querySelector('.cart-button');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Update cart button text
    cartButton.innerHTML = `<i class="bi bi-cart"></i> Cart (${cart.length})`;

    // Clear cart items container
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    // Loop through cart items and update UI
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    // Update cart total
    cartTotal.textContent = totalPrice.toFixed(2);
}

// Function to update kids cart UI
// تحديث واجهة السلة الخاصة بالأطفال
function updateKidsCartUI() {
    // Select kids cart button and cart items container
    const kidsCartButton = document.querySelector('.cart-button');
    const kidsCartItemsContainer = document.getElementById('cart-items');
    const kidsCartTotal = document.getElementById('cart-total');

    // Update kids cart button text
    kidsCartButton.innerHTML = `<i class="bi bi-cart"></i> Cart (${kidsCart.length})`;

    // Clear kids cart items container
    kidsCartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    // Loop through kids cart items and update UI
    kidsCart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        kidsCartItemsContainer.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    // Update kids cart total
    kidsCartTotal.textContent = totalPrice.toFixed(2);
}

// Function to update womens cart UI
// تحديث واجهة السلة الخاصة بالنساء
function updateWomensCartUI() {
    // Select womens cart button and cart items container
    const womensCartButton = document.querySelector('.cart-button');
    const womensCartItemsContainer = document.getElementById('cart-items');
    const womensCartTotal = document.getElementById('cart-total');

    // Update womens cart button text
    womensCartButton.innerHTML = `<i class="bi bi-cart"></i> Cart (${womensCart.length})`;

    // Clear womens cart items container
    womensCartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    // Loop through womens cart items and update UI
    womensCart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        womensCartItemsContainer.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    // Update womens cart total
    womensCartTotal.textContent = totalPrice.toFixed(2);
}

// Function to update brands cart UI
// تحديث واجهة السلة الخاصة بالعلامات التجارية
function updateBrandsCartUI() {
    // Select brands cart button and cart items container
    const brandsCartButton = document.querySelector('.cart-button');
    const brandsCartItemsContainer = document.getElementById('cart-items');
    const brandsCartTotal = document.getElementById('cart-total');

    // Update brands cart button text
    brandsCartButton.innerHTML = `<i class="bi bi-cart"></i> Cart (${brandsCart.length})`;

    // Clear brands cart items container
    brandsCartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    // Loop through brands cart items and update UI
    brandsCart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        brandsCartItemsContainer.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    // Update brands cart total
    brandsCartTotal.textContent = totalPrice.toFixed(2);
}

// Event listener for adding product to cart
// إضافة منتج إلى السلة
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Get product item and product details
        const productItem = this.closest('.product-item');
        const productId = productItem.getAttribute('data-product-id');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('.price').textContent.replace('$', ''));

        // Check if product is already in cart
        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            // If product is already in cart, increment quantity
            existingProduct.quantity++;
        } else {
            // If product is not in cart, add it
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        // Update local storage and cart UI
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    });
});

// Event listener for adding product to kids cart
// إضافة منتج إلى سلة الأطفال
document.querySelectorAll('.add-to-kids-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Get product item and product details
        const productItem = this.closest('.product-item');
        const productId = productItem.getAttribute('data-product-id');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('.price').textContent.replace('$', ''));

        // Check if product is already in kids cart
        const existingProduct = kidsCart.find(item => item.id === productId);

        if (existingProduct) {
            // If product is already in kids cart, increment quantity
            existingProduct.quantity++;
        } else {
            // If product is not in kids cart, add it
            kidsCart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        // Update local storage and kids cart UI
        localStorage.setItem('kidsCart', JSON.stringify(kidsCart));
        updateKidsCartUI();
    });
});

// Event listener for adding product to womens cart
// إضافة منتج إلى سلة النساء
document.querySelectorAll('.add-to-womens-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Get product item and product details
        const productItem = this.closest('.product-item');
        const productId = productItem.getAttribute('data-product-id');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('.price').textContent.replace('$', ''));

        // Check if product is already in womens cart
        const existingProduct = womensCart.find(item => item.id === productId);

        if (existingProduct) {
            // If product is already in womens cart, increment quantity
            existingProduct.quantity++;
        } else {
            // If product is not in womens cart, add it
            womensCart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        // Update local storage and womens cart UI
        localStorage.setItem('womensCart', JSON.stringify(womensCart));
        updateWomensCartUI();
    });
});

// Event listener for adding product to brands cart
// إضافة منتج إلى سلة العلامات التجارية
document.querySelectorAll('.add-to-brands-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Get product item and product details
        const productItem = this.closest('.product-item');
        const productId = productItem.getAttribute('data-product-id');
        const productName = productItem.querySelector('h3').textContent;
        const productPrice = parseFloat(productItem.querySelector('.price').textContent.replace('$', ''));

        // Check if product is already in brands cart
        const existingProduct = brandsCart.find(item => item.id === productId);

        if (existingProduct) {
            // If product is already in brands cart, increment quantity
            existingProduct.quantity++;
        } else {
            // If product is not in brands cart, add it
            brandsCart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        // Update local storage and brands cart UI
        localStorage.setItem('brandsCart', JSON.stringify(brandsCart));
        updateBrandsCartUI();
    });
});

// Event listener for opening cart
// فتح السلة
document.querySelector('.cart-button').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'flex';
});

// Function to close cart
// إغلاق السلة
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Function to clear cart
// مسح السلة
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    closeCart();
}

// Function to clear kids cart
// مسح سلة الأطفال
function clearKidsCart() {
    kidsCart = [];
    localStorage.setItem('kidsCart', JSON.stringify(kidsCart));
    updateKidsCartUI();
    closeCart();
}

// Function to clear womens cart
// مسح سلة النساء
function clearWomensCart() {
    womensCart = [];
    localStorage.setItem('womensCart', JSON.stringify(womensCart));
    updateWomensCartUI();
    closeCart();
}

// Function to clear brands cart
// مسح سلة العلامات التجارية
function clearBrandsCart() {
    brandsCart = [];
    localStorage.setItem('brandsCart', JSON.stringify(brandsCart));
    updateBrandsCartUI();
    closeCart();
}

// Function to calculate total
// Function to calculate total
function calculateTotal() {
    let total = 0;
    [...kidsCart, ...womensCart, ...brandsCart].forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}

// Function to checkout
// متابعة إلى الدفع
function checkout() {
    const totalAmount = calculateTotal(); 
    alert(`Proceeding to checkout with a total of $${totalAmount.toFixed(2)}`);
}

// Event listener for checkout button
// إضافة حدث لزر الدفع
const checkoutButton = document.getElementById('checkout-button'); 
if (checkoutButton) {
    checkoutButton.addEventListener('click', checkout);
}

// Update cart UI on page load
// عند تحميل الصفحة، تحديث واجهة السلة
window.onload = updateCartUI();
