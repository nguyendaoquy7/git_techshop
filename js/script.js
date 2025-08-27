
// Dữ liệu sản phẩm với hình ảnh thật
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        price: 29990000,
        originalPrice: 32990000,
        category: "phone",
        rating: 4.8,
        reviews: 150,
        image: "https://image.rakuten.co.jp/sansuiagc/cabinet/biiino/item/s-image/20250820100504_13_1.jpg",
        badge: "Hot",
        description: "iPhone 15 Pro Max với chip A17 Pro mạnh mẽ, camera 48MP chuyên nghiệp và màn hình Super Retina XDR 6.7 inch. Thiết kế titanium cao cấp, bền bỉ."
    },
    {
        id: 2,
        name: "MacBook Air M3",
        price: 28990000,
        originalPrice: 31990000,
        category: "laptop",
        rating: 4.9,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        badge: "New",
        description: "MacBook Air M3 với hiệu năng vượt trội, pin 18 tiếng và màn hình Liquid Retina 13.6 inch. Mỏng nhẹ chỉ 1.24kg, hoàn hảo cho công việc và giải trí."
    },
    {
        id: 3,
        name: "iPad Pro 12.9",
        price: 25990000,
        originalPrice: 27990000,
        category: "tablet",
        rating: 4.7,
        reviews: 76,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        badge: "Sale",
        description: "iPad Pro 12.9 inch với chip M2, màn hình Liquid Retina XDR và hỗ trợ Apple Pencil thế hệ 2. Lý tưởng cho sáng tạo và năng suất cao."
    },
    {
        id: 4,
        name: "Samsung Galaxy S24 Ultra",
        price: 26990000,
        originalPrice: 29990000,
        category: "phone",
        rating: 4.6,
        reviews: 123,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        badge: "Hot",
        description: "Galaxy S24 Ultra với bút S Pen tích hợp, camera 200MP và màn hình Dynamic AMOLED 2X 6.8 inch. AI thông minh, pin 5000mAh."
    },
    {
        id: 5,
        name: "Dell XPS 13",
        price: 24990000,
        originalPrice: 26990000,
        category: "laptop",
        rating: 4.5,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        badge: "New",
        description: "Dell XPS 13 với thiết kế InfinityEdge, màn hình 4K và bộ xử lý Intel Core thế hệ 13. Mỏng nhẹ, hiệu năng cao cho doanh nhân."
    },
    {
        id: 6,
        name: "AirPods Pro 2",
        price: 6990000,
        originalPrice: 7990000,
        category: "accessories",
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        badge: "Best Seller",
        description: "AirPods Pro 2 với chip H2, chống ồn chủ động thế hệ mới và âm thanh không gian. Pin 6 tiếng, case sạc MagSafe."
    },
    {
        id: 7,
        name: "Surface Pro 9",
        price: 22990000,
        originalPrice: 24990000,
        category: "tablet",
        rating: 4.4,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        badge: "Sale",
        description: "Surface Pro 9 với bộ xử lý Intel Core i7, màn hình PixelSense 13 inch và Type Cover tích hợp. Laptop và tablet trong một."
    },
    {
        id: 8,
        name: "Apple Watch Series 9",
        price: 9990000,
        originalPrice: 10990000,
        category: "accessories",
        rating: 4.7,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        badge: "New",
        description: "Apple Watch Series 9 với chip S9, màn hình Always-On Retina và tính năng sức khỏe toàn diện. Theo dõi sức khỏe 24/7."
    },
    {
        id: 9,
        name: "Sony WH-1000XM5",
        price: 8990000,
        originalPrice: 9990000,
        category: "accessories",
        rating: 4.9,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        badge: "Hot",
        description: "Sony WH-1000XM5 với công nghệ chống ồn hàng đầu, âm thanh Hi-Res và pin 30 tiếng. Thiết kế thoải mái cho sử dụng lâu dài."
    },
    {
        id: 10,
        name: "ASUS ROG Strix G15",
        price: 32990000,
        originalPrice: 35990000,
        category: "laptop",
        rating: 4.6,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        badge: "Gaming",
        description: "ASUS ROG Strix G15 với RTX 4060, AMD Ryzen 7 và màn hình 144Hz. Laptop gaming mạnh mẽ với hệ thống tản nhiệt ROG."
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫';
}

function displayProducts(productsToShow, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    productsToShow.forEach(product => {
        const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));
        const card = `
            <div class="product-card" onclick="viewProduct(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.discount ? `<span class="product-badge">${product.discount}</span>` : ''}
                </div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}
                    ${product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                    ${product.discount ? `<span class="product-discount">${product.discount}</span>` : ''}
                </div>
                <div class="product-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-text">${product.rating}/5</span>
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Thêm vào giỏ hàng</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    if (!cartItems || !cartTotal) return;
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666;">Giỏ hàng của bạn đang trống.</p>';
    } else {
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                const itemTotal = product.price * item.quantity;
                total += itemTotal;
                const cartItem = `
                    <div class="cart-item">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <img src="${product.image}" alt="${product.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
                            <div class="cart-item-info">
                                <h4>${product.name}</h4>
                                <p>Đơn giá: ${formatPrice(product.price)}</p>
                                <p>Tổng: ${formatPrice(itemTotal)}</p>
                            </div>
                        </div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn remove" onclick="updateQuantity(${product.id}, -1)">−</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                            <button class="delete-btn" onclick="removeFromCart(${product.id})">🗑️</button>
                        </div>
                    </div>
                `;
                cartItems.innerHTML += cartItem;
            }
        });
    }
    cartTotal.textContent = `Tổng: ${formatPrice(total)}`;
    updateCartCount();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    saveCart();
    updateCartCount();
    showNotification(`${product.name} đã được thêm vào giỏ hàng!`);
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
}

function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        saveCart();
        displayCart();
    }
}

function removeFromCart(productId) {
    const product = products.find(p => p.id === productId);
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCart();
    showNotification(`${product.name} đã được xóa khỏi giỏ hàng!`);
}

function filterProducts() {
    const category = document.getElementById('categoryFilter')?.value || 'all';
    const rating = parseFloat(document.getElementById('ratingFilter')?.value || 0);
    const maxPrice = parseInt(document.getElementById('priceRange')?.value || 50000000);

    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    if (rating > 0) {
        filteredProducts = filteredProducts.filter(p => p.rating >= rating);
    }
    filteredProducts = filteredProducts.filter(p => p.price <= maxPrice);

    displayProducts(filteredProducts, 'productGrid');
}

function sortProducts() {
    const sortBy = document.getElementById('sortSelect')?.value || 'default';
    let sortedProducts = [...products];

    if (sortBy === 'price-low') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    displayProducts(sortedProducts, 'productGrid');
}

function filterByPrice() {
    const priceRange = document.getElementById('priceRange');
    const priceDisplay = document.getElementById('priceDisplay');
    if (priceRange && priceDisplay) {
        priceDisplay.textContent = formatPrice(parseInt(priceRange.value));
        filterProducts();
    }
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    const containerId = window.location.pathname.includes('products.html') ? 'productGrid' : 'featuredProducts';
    displayProducts(filteredProducts, containerId);
}

function handleSearchEnter(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
}

function viewProduct(productId) {
    localStorage.setItem('selectedProductId', productId);
    window.location.href = 'product-detail.html';
}

function displayProductDetail() {
    const productId = parseInt(localStorage.getItem('selectedProductId'));
    const product = products.find(p => p.id === productId);
    if (product) {
        const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));
        const productDetailContent = document.getElementById('productDetailContent');
        if (productDetailContent) {
            productDetailContent.innerHTML = `
                <div class="product-detail">
                    <div class="product-detail-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-detail-info">
                        <h1>${product.name}</h1>
                        <div class="product-detail-price">${formatPrice(product.price)}
                            ${product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                            ${product.discount ? `<span class="product-discount">${product.discount}</span>` : ''}
                        </div>
                        <div class="product-rating">
                            <span class="stars">${stars}</span>
                            <span class="rating-text">${product.rating}/5</span>
                        </div>
                        <p class="product-detail-description">${product.description}</p>
                        <div class="quantity-selector">
                            <button class="quantity-btn remove" onclick="updateDetailQuantity(-1)">−</button>
                            <input type="number" class="quantity-input" id="detailQuantity" value="1" min="1">
                            <button class="quantity-btn" onclick="updateDetailQuantity(1)">+</button>
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            `;
        }
    }
}

function updateDetailQuantity(change) {
    const quantityInput = document.getElementById('detailQuantity');
    if (quantityInput) {
        let quantity = parseInt(quantityInput.value) + change;
        if (quantity < 1) quantity = 1;
        quantityInput.value = quantity;
    }
}

function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.textContent = message;
        notification.className = `notification ${isError ? 'error' : ''}`;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2500);
    }
}

function submitContactForm(event) {
    event.preventDefault();
    showNotification('Tin nhắn của bạn đã được gửi thành công!');
    event.target.reset();
}

// Login/Register Functions
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.id === tabId) {
            tab.classList.add('active');
        }
    });
}

function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
        showTab('login'); // Hiển thị form đăng nhập mặc định
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Hàm attachFormEventListeners đã được cập nhật trước đó
function attachFormEventListeners() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm?.removeEventListener('submit', submitLogin);
    registerForm?.removeEventListener('submit', submitRegister);

    if (loginForm) {
        loginForm.addEventListener('submit', submitLogin);
    }
    if (registerForm) {
        registerForm.addEventListener('submit', submitRegister);
    }
}

// Gọi hàm này khi trang tải
document.addEventListener('DOMContentLoaded', () => {
    // ... (các đoạn mã khác giữ nguyên)
    attachFormEventListeners();
});

function submitRegister(event) {
    event.preventDefault();
    const nameInput = document.getElementById('registerName');
    const emailInput = document.getElementById('registerEmail');
    const passwordInput = document.getElementById('registerPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (!nameInput || !emailInput || !passwordInput || !confirmPasswordInput) {
        showNotification('Lỗi: Không tìm thấy trường nhập liệu!', true);
        return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!name || !email || !password || !confirmPassword) {
        showNotification('Vui lòng điền đầy đủ các trường!', true);
        return;
    }

    if (password !== confirmPassword) {
        showNotification('Mật khẩu xác nhận không khớp!', true);
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.email === email)) {
        showNotification('Email này đã được đăng ký!', true);
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    showNotification('Đăng ký thành công! Vui lòng đăng nhập.');
    showTab('login');
    document.getElementById('registerForm')?.reset();
}

function submitLogin(event) {
    event.preventDefault();
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');

    if (!emailInput || !passwordInput) {
        showNotification('Lỗi: Không tìm thấy trường nhập liệu!', true);
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        showNotification('Vui lòng điền đầy đủ email và mật khẩu!', true);
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        currentUser = { email: user.email, name: user.name };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showNotification('Đăng nhập thành công!');
        closeLoginModal();
        updateUserButton();
    } else {
        showNotification('Email hoặc mật khẩu không đúng!', true);
    }
}

function updateUserButton() {
    const userButtons = document.querySelectorAll('.user-btn');
    userButtons.forEach(userBtn => {
        if (currentUser) {
            userBtn.textContent = `👤 ${currentUser.name} (Đăng xuất)`;
            userBtn.onclick = logout;
        } else {
            userBtn.textContent = '👤 Đăng nhập';
            userBtn.onclick = showLoginModal;
        }
    });
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showNotification('Đăng xuất thành công!');
    updateUserButton();
}

function checkout() {
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để thanh toán!', true);
        showLoginModal();
        return;
    }
    if (cart.length === 0) {
        showNotification('Giỏ hàng của bạn đang trống!', true);
        return;
    }
    showNotification('Thanh toán thành công! Cảm ơn bạn đã mua sắm tại TechShop.');
    cart = [];
    saveCart();
    displayCart();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateUserButton();
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        displayProducts(products.slice(0, 4), 'featuredProducts');
    } else if (window.location.pathname.includes('products.html')) {
        displayProducts(products, 'productGrid');
        const priceRange = document.getElementById('priceRange');
        if (priceRange) priceRange.addEventListener('input', filterByPrice);
    } else if (window.location.pathname.includes('product-detail.html')) {
        displayProductDetail();
    } else if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
});