/* =========================================================
   BLOOM & BLOSSOM
   FLOWER SHOP MANAGEMENT SYSTEM
========================================================= */


/* =========================================================
   STORAGE HELPERS
========================================================= */

function getData(key, fallback) {
    try {
        const data = localStorage.getItem(key);

        if (data) {
            return JSON.parse(data);
        }

        return fallback;
    } catch (error) {
        return fallback;
    }
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}


/* =========================================================
   DEFAULT DATA
========================================================= */

const defaultProducts = [
    {
        id: 1,
        name: "Red Rose Bouquet",
        category: "Roses",
        price: 799,
        oldPrice: 999,
        stock: 18,
        rating: 4.9,
        emoji: "🌹",
        description: "A beautiful arrangement of premium red roses.",
        occasions: ["Love", "Anniversary", "Celebration"]
    },
    {
        id: 2,
        name: "Golden Sunflower Basket",
        category: "Sunflowers",
        price: 599,
        oldPrice: 699,
        stock: 32,
        rating: 4.8,
        emoji: "🌻",
        description: "Bright sunflowers arranged in an elegant basket.",
        occasions: ["Birthday", "Celebration"]
    },
    {
        id: 3,
        name: "Pink Tulip Garden",
        category: "Tulips",
        price: 899,
        oldPrice: 1099,
        stock: 12,
        rating: 4.7,
        emoji: "🌷",
        description: "Fresh pink tulips perfect for special moments.",
        occasions: ["Love", "Anniversary"]
    },
    {
        id: 4,
        name: "Royal Orchid Collection",
        category: "Orchids",
        price: 1499,
        oldPrice: 1799,
        stock: 8,
        rating: 5,
        emoji: "🌺",
        description: "Elegant orchids carefully selected for premium gifting.",
        occasions: ["Wedding", "Celebration"]
    },
    {
        id: 5,
        name: "Luxury Celebration Bouquet",
        category: "Bouquets",
        price: 1299,
        oldPrice: 1599,
        stock: 15,
        rating: 4.9,
        emoji: "💐",
        description: "A colorful luxury bouquet for every celebration.",
        occasions: ["Birthday", "Celebration", "Anniversary"]
    },
    {
        id: 6,
        name: "Classic White Roses",
        category: "Roses",
        price: 699,
        oldPrice: 799,
        stock: 21,
        rating: 4.6,
        emoji: "🥀",
        description: "Elegant white roses with a soft natural fragrance.",
        occasions: ["Wedding", "Love"]
    },
    {
        id: 7,
        name: "Birthday Flower Box",
        category: "Gift Hampers",
        price: 1199,
        oldPrice: 1499,
        stock: 9,
        rating: 4.8,
        emoji: "🎁",
        description: "Flowers and gifts beautifully packed for birthdays.",
        occasions: ["Birthday", "Celebration"]
    },
    {
        id: 8,
        name: "Pastel Love Bouquet",
        category: "Bouquets",
        price: 999,
        oldPrice: 1199,
        stock: 14,
        rating: 4.9,
        emoji: "💗",
        description: "Soft pastel flowers designed for someone special.",
        occasions: ["Love", "Anniversary"]
    },
    {
        id: 9,
        name: "Wedding White Bloom",
        category: "Bouquets",
        price: 2199,
        oldPrice: 2499,
        stock: 5,
        rating: 5,
        emoji: "🤍",
        description: "Premium white flower arrangement for weddings.",
        occasions: ["Wedding"]
    },
    {
        id: 10,
        name: "Mixed Spring Basket",
        category: "Gift Hampers",
        price: 1399,
        oldPrice: 1699,
        stock: 20,
        rating: 4.7,
        emoji: "🌼",
        description: "A colorful mix of beautiful seasonal flowers.",
        occasions: ["Birthday", "Celebration"]
    }
];


const defaultUsers = [
    {
        id: 1,
        name: "Administrator",
        email: "admin@bloom.com",
        password: "admin123",
        phone: "9876543210",
        role: "admin",
        status: "Active"
    },
    {
        id: 2,
        name: "Staff Member",
        email: "staff@bloom.com",
        password: "staff123",
        phone: "9876543211",
        role: "staff",
        status: "Active"
    },
    {
        id: 3,
        name: "Demo Customer",
        email: "customer@bloom.com",
        password: "customer123",
        phone: "9876543212",
        role: "customer",
        status: "Active"
    }
];


const defaultCustomers = [
    {
        id: 1,
        name: "Priya Sharma",
        email: "priya@example.com",
        phone: "9876501234",
        address: "Ludhiana, Punjab",
        orders: 8,
        spent: 7450,
        status: "Active"
    },
    {
        id: 2,
        name: "Rahul Verma",
        email: "rahul@example.com",
        phone: "9876502345",
        address: "Delhi",
        orders: 5,
        spent: 4230,
        status: "Active"
    },
    {
        id: 3,
        name: "Ananya Singh",
        email: "ananya@example.com",
        phone: "9876503456",
        address: "Chandigarh",
        orders: 11,
        spent: 11890,
        status: "Active"
    },
    {
        id: 4,
        name: "Aman Gupta",
        email: "aman@example.com",
        phone: "9876504567",
        address: "Amritsar, Punjab",
        orders: 2,
        spent: 1299,
        status: "Inactive"
    }
];


const defaultOrders = [
    {
        id: 1001,
        customerId: 1,
        customerName: "Priya Sharma",
        items: [
            {
                productId: 1,
                name: "Red Rose Bouquet",
                emoji: "🌹",
                quantity: 2,
                price: 799
            }
        ],
        total: 1598,
        status: "Delivered",
        date: "2026-10-28",
        address: "Ludhiana, Punjab",
        deliveryDate: "2026-10-29",
        deliveryTime: "4 PM - 6 PM",
        payment: "UPI",
        message: "Happy Anniversary ❤️"
    },
    {
        id: 1002,
        customerId: 2,
        customerName: "Rahul Verma",
        items: [
            {
                productId: 2,
                name: "Golden Sunflower Basket",
                emoji: "🌻",
                quantity: 1,
                price: 599
            },
            {
                productId: 5,
                name: "Luxury Celebration Bouquet",
                emoji: "💐",
                quantity: 1,
                price: 1299
            }
        ],
        total: 1898,
        status: "Preparing",
        date: "2026-10-30",
        address: "Delhi",
        deliveryDate: "2026-10-31",
        deliveryTime: "2 PM - 4 PM",
        payment: "Card",
        message: ""
    },
    {
        id: 1003,
        customerId: 3,
        customerName: "Ananya Singh",
        items: [
            {
                productId: 4,
                name: "Royal Orchid Collection",
                emoji: "🌺",
                quantity: 1,
                price: 1499
            }
        ],
        total: 1499,
        status: "Confirmed",
        date: "2026-10-30",
        address: "Chandigarh",
        deliveryDate: "2026-11-01",
        deliveryTime: "10 AM - 12 PM",
        payment: "UPI",
        message: "Congratulations!"
    }
];


/* =========================================================
   APP STATE
========================================================= */

let products = getData("bloom_products", defaultProducts);
let users = getData("bloom_users", defaultUsers);
let customers = getData("bloom_customers", defaultCustomers);
let orders = getData("bloom_orders", defaultOrders);
let cart = getData("bloom_cart", []);
let wishlist = getData("bloom_wishlist", []);
let notifications = getData("bloom_notifications", [
    {
        id: 1,
        icon: "📦",
        text: "New order #1003 has been received.",
        time: "10 minutes ago",
        read: false
    },
    {
        id: 2,
        icon: "⚠️",
        text: "Royal Orchid Collection is running low.",
        time: "1 hour ago",
        read: false
    },
    {
        id: 3,
        icon: "🌸",
        text: "Welcome to Bloom & Blossom!",
        time: "Today",
        read: true
    }
]);

let currentUser = getData("bloom_current_user", null);

let currentOrderFilter = "all";
let currentOccasion = "all";
let couponDiscount = 0;


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (currentUser) {
        showApp();
    } else {
        showAuth();
    }

    setupEvents();
});


function setupEvents() {

    document.getElementById("loginForm").addEventListener("submit", login);

    document.getElementById("registerForm").addEventListener("submit", register);

    document.getElementById("productForm").addEventListener("submit", saveProduct);

    document.getElementById("customerForm").addEventListener("submit", saveCustomer);

    document.getElementById("checkoutForm").addEventListener("submit", placeOrder);

    document.getElementById("profileForm").addEventListener("submit", updateProfile);

    document.querySelectorAll(".nav-item[data-page]").forEach(button => {

        button.addEventListener("click", function () {

            const page = this.dataset.page;

            navigate(page);

        });

    });

}


/* =========================================================
   AUTHENTICATION
========================================================= */

function showAuth() {

    document.getElementById("authScreen").classList.remove("hidden");

    document.getElementById("app").classList.add("hidden");

}


function showApp() {

    document.getElementById("authScreen").classList.add("hidden");

    document.getElementById("app").classList.remove("hidden");

    setupUserInterface();

    updateDashboard();

    renderNotifications();

    renderShop();

    renderProductsTable();

    renderOrders();

    renderCustomers();

    renderInventory();

    renderUsers();

    renderWishlist();

    renderCart();

    renderReports();

    renderProfile();

    navigate("dashboard");

}


function showLogin() {

    document.getElementById("loginBox").classList.remove("hidden");

    document.getElementById("registerBox").classList.add("hidden");

}


function showRegister() {

    document.getElementById("loginBox").classList.add("hidden");

    document.getElementById("registerBox").classList.remove("hidden");

}


function togglePassword(id, button) {

    const input = document.getElementById(id);

    if (input.type === "password") {

        input.type = "text";

        button.textContent = "🙈";

    } else {

        input.type = "password";

        button.textContent = "👁";

    }

}


function demoLogin(role) {

    const account = users.find(user => user.role === role);

    if (!account) {
        showToast("Demo account not found.", "error");
        return;
    }

    currentUser = account;

    saveData("bloom_current_user", currentUser);

    showToast(`Welcome, ${account.name}!`, "success");

    showApp();

}


function login(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();

    const password = document.getElementById("loginPassword").value;

    const user = users.find(
        item =>
            item.email.toLowerCase() === email &&
            item.password === password
    );

    if (!user) {

        showToast("Invalid email or password.", "error");

        return;
    }

    if (user.status !== "Active") {

        showToast("This account is inactive.", "error");

        return;
    }

    currentUser = user;

    saveData("bloom_current_user", currentUser);

    showToast("Login successful! 🌸", "success");

    showApp();

}


function register(event) {

    event.preventDefault();

    const name = document.getElementById("registerName").value.trim();

    const phone = document.getElementById("registerPhone").value.trim();

    const email = document.getElementById("registerEmail").value.trim().toLowerCase();

    const password = document.getElementById("registerPassword").value;

    const confirm = document.getElementById("registerConfirm").value;


    if (password.length < 6) {

        showToast("Password must contain at least 6 characters.", "error");

        return;
    }


    if (password !== confirm) {

        showToast("Passwords do not match.", "error");

        return;
    }


    if (!/^\d{10}$/.test(phone)) {

        showToast("Please enter a valid 10 digit phone number.", "error");

        return;
    }


    if (users.some(user => user.email.toLowerCase() === email)) {

        showToast("An account with this email already exists.", "error");

        return;
    }


    const newUser = {

        id: Date.now(),

        name,

        email,

        password,

        phone,

        role: "customer",

        status: "Active"

    };


    users.push(newUser);

    saveData("bloom_users", users);


    customers.push({

        id: newUser.id,

        name,

        email,

        phone,

        address: "",

        orders: 0,

        spent: 0,

        status: "Active"

    });


    saveData("bloom_customers", customers);


    currentUser = newUser;

    saveData("bloom_current_user", currentUser);


    showToast("Account created successfully! 🌸", "success");

    showApp();

}


function logout() {

    if (!confirm("Are you sure you want to logout?")) {
        return;
    }

    currentUser = null;

    localStorage.removeItem("bloom_current_user");

    showAuth();

    showLogin();

}


/* =========================================================
   ROLE BASED ACCESS
========================================================= */

function setupUserInterface() {

    if (!currentUser) return;

    document.getElementById("topUserName").textContent = currentUser.name;

    document.getElementById("topAvatar").textContent =
        currentUser.name.charAt(0).toUpperCase();

    document.getElementById("topUserRole").textContent =
        getRoleName(currentUser.role);

    document.getElementById("welcomeName").textContent =
        currentUser.name.split(" ")[0];


    const greeting = getGreeting();

    document.getElementById("greeting").textContent = greeting;


    document.querySelectorAll(".admin-only").forEach(item => {

        item.style.display =
            currentUser.role === "admin" ? "flex" : "none";

    });


    document.querySelectorAll(".staff-admin").forEach(item => {

        item.style.display =
            currentUser.role === "admin" ||
            currentUser.role === "staff"
                ? "flex"
                : "none";

    });


    document.querySelectorAll(".customer-only").forEach(item => {

        item.style.display =
            currentUser.role === "customer"
                ? "flex"
                : "none";

    });


    if (currentUser.role === "customer") {

        document.querySelector('[data-page="dashboard"]').style.display = "flex";

    }

}


function getRoleName(role) {

    if (role === "admin") return "Administrator";

    if (role === "staff") return "Staff Member";

    return "Customer";

}


function getGreeting() {

    const hour = new Date().getHours();

    if (hour < 12) return "Morning";

    if (hour < 17) return "Afternoon";

    return "Evening";

}


/* =========================================================
   NAVIGATION
========================================================= */

function navigate(page) {

    const target = document.getElementById(page + "Page");

    if (!target) return;


    document.querySelectorAll(".page").forEach(section => {

        section.classList.remove("active-page");

    });


    target.classList.add("active-page");


    document.querySelectorAll(".nav-item[data-page]").forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.page === page
        );

    });


    const titles = {

        dashboard: ["Dashboard", "Overview of your flower shop"],

        shop: ["Flower Shop", "Find beautiful flowers"],

        products: ["Products", "Manage your flower catalog"],

        orders: ["Orders", "Manage customer orders"],

        customers: ["Customers", "Customer management"],

        inventory: ["Inventory", "Monitor flower stock"],

        users: ["Users", "Manage system access"],

        reports: ["Reports", "Business performance"],

        cart: ["Shopping Cart", "Review your selected flowers"],

        wishlist: ["Wishlist", "Your favorite flowers"],

        profile: ["Profile", "Manage your account"]

    };


    if (titles[page]) {

        document.getElementById("pageTitle").textContent =
            titles[page][0];

        document.getElementById("pageSubtitle").textContent =
            titles[page][1];

    }


    if (window.innerWidth <= 900) {

        document.getElementById("sidebar").classList.remove("open");

    }


    if (page === "dashboard") updateDashboard();

    if (page === "shop") renderShop();

    if (page === "products") renderProductsTable();

    if (page === "orders") renderOrders();

    if (page === "customers") renderCustomers();

    if (page === "inventory") renderInventory();

    if (page === "users") renderUsers();

    if (page === "reports") renderReports();

    if (page === "cart") renderCart();

    if (page === "wishlist") renderWishlist();

    if (page === "profile") renderProfile();

}


/* =========================================================
   DASHBOARD
========================================================= */

function updateDashboard() {

    document.getElementById("statOrders").textContent = orders.length;

    document.getElementById("statProducts").textContent = products.length;

    const revenue = orders.reduce(
        (sum, order) => sum + Number(order.total),
        0
    );

    document.getElementById("statRevenue").textContent =
        formatCurrency(revenue);

    document.getElementById("statCustomers").textContent =
        customers.length;


    renderTopProducts();

    renderRecentOrders();

    renderChart();

}


function renderRecentOrders() {

    const table = document.getElementById("recentOrdersTable");

    const recent = [...orders]
        .sort((a, b) => b.id - a.id)
        .slice(0, 6);


    if (recent.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="6">
                    <div class="empty-state">
                        No orders yet.
                    </div>
                </td>
            </tr>
        `;

        return;

    }


    table.innerHTML = recent.map(order => `

        <tr>

            <td>
                <strong>#${order.id}</strong>
            </td>

            <td>
                ${escapeHtml(order.customerName)}
            </td>

            <td>
                ${formatDate(order.date)}
            </td>

            <td>
                <strong>${formatCurrency(order.total)}</strong>
            </td>

            <td>
                <span class="status-badge ${getStatusClass(order.status)}">
                    ${order.status}
                </span>
            </td>

            <td>

                <button
                    class="action-btn"
                    onclick="viewOrder(${order.id})"
                    title="View"
                >
                    👁
                </button>

            </td>

        </tr>

    `).join("");

}


function renderTopProducts() {

    const container = document.getElementById("topProductsList");

    const sales = {};

    orders.forEach(order => {

        order.items.forEach(item => {

            if (!sales[item.productId]) {

                sales[item.productId] = {

                    name: item.name,

                    emoji: item.emoji,

                    quantity: 0,

                    revenue: 0

                };

            }


            sales[item.productId].quantity += item.quantity;

            sales[item.productId].revenue +=
                item.price * item.quantity;

        });

    });


    const top = Object.values(sales)
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 5);


    if (!top.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🌸</div>
                <p>No sales data yet.</p>
            </div>
        `;

        return;

    }


    container.innerHTML = top.map(item => `

        <div class="top-product">

            <div class="top-product-icon">
                ${item.emoji}
            </div>

            <div class="top-product-info">

                <strong>${escapeHtml(item.name)}</strong>

                <small>${item.quantity} sold</small>

            </div>

            <div class="top-product-price">
                ${formatCurrency(item.revenue)}
            </div>

        </div>

    `).join("");

}


/* =========================================================
   SALES CHART
========================================================= */

function renderChart() {

    const canvas = document.getElementById("salesChart");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();

    const ratio = window.devicePixelRatio || 1;

    canvas.width = rect.width * ratio;

    canvas.height = rect.height * ratio;

    ctx.scale(ratio, ratio);


    const width = rect.width;

    const height = rect.height;


    ctx.clearRect(0, 0, width, height);


    const labels = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];


    const values = [4200, 5600, 3900, 6800, 5100, 8200, 7300];


    const max = Math.max(...values) * 1.15;


    const padding = {

        left: 45,

        right: 20,

        top: 20,

        bottom: 35

    };


    const chartWidth =
        width - padding.left - padding.right;

    const chartHeight =
        height - padding.top - padding.bottom;


    const style = getComputedStyle(document.body);

    const borderColor =
        style.getPropertyValue("--border").trim();

    const textColor =
        style.getPropertyValue("--text-light").trim();

    const primaryColor =
        style.getPropertyValue("--primary").trim();


    /* GRID */

    ctx.strokeStyle = borderColor;

    ctx.lineWidth = 1;


    for (let i = 0; i <= 4; i++) {

        const y =
            padding.top +
            chartHeight -
            (chartHeight / 4) * i;

        ctx.beginPath();

        ctx.moveTo(padding.left, y);

        ctx.lineTo(width - padding.right, y);

        ctx.stroke();

    }


    /* LINE */

    ctx.beginPath();


    values.forEach((value, index) => {

        const x =
            padding.left +
            (chartWidth / (values.length - 1)) * index;

        const y =
            padding.top +
            chartHeight -
            (value / max) * chartHeight;


        if (index === 0) {

            ctx.moveTo(x, y);

        } else {

            ctx.lineTo(x, y);

        }

    });


    ctx.strokeStyle = primaryColor;

    ctx.lineWidth = 3;

    ctx.stroke();


    /* POINTS */

    values.forEach((value, index) => {

        const x =
            padding.left +
            (chartWidth / (values.length - 1)) * index;

        const y =
            padding.top +
            chartHeight -
            (value / max) * chartHeight;


        ctx.beginPath();

        ctx.arc(x, y, 5, 0, Math.PI * 2);

        ctx.fillStyle = primaryColor;

        ctx.fill();

    });


    /* LABELS */

    ctx.fillStyle = textColor;

    ctx.font = "11px DM Sans";

    ctx.textAlign = "center";


    labels.forEach((label, index) => {

        const x =
            padding.left +
            (chartWidth / (labels.length - 1)) * index;

        ctx.fillText(
            label,
            x,
            height - 10
        );

    });

}


/* =========================================================
   SHOP
========================================================= */

function renderShop() {

    const container = document.getElementById("shopProducts");

    if (!container) return;


    const search =
        (document.getElementById("shopSearch")?.value || "")
        .toLowerCase();


    const category =
        document.getElementById("categoryFilter")?.value || "all";


    const price =
        document.getElementById("priceFilter")?.value || "all";


    const sort =
        document.getElementById("sortProducts")?.value || "default";


    let filtered = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search);


        const matchesCategory =
            category === "all" ||
            product.category === category;


        let matchesPrice = true;


        if (price === "0-500") {

            matchesPrice = product.price < 500;

        } else if (price === "500-1000") {

            matchesPrice =
                product.price >= 500 &&
                product.price <= 1000;

        } else if (price === "1000-2000") {

            matchesPrice =
                product.price > 1000 &&
                product.price <= 2000;

        } else if (price === "2000+") {

            matchesPrice = product.price > 2000;

        }


        const matchesOccasion =
            currentOccasion === "all" ||
            product.occasions.includes(currentOccasion);


        return (
            matchesSearch &&
            matchesCategory &&
            matchesPrice &&
            matchesOccasion
        );

    });


    if (sort === "low") {

        filtered.sort((a, b) => a.price - b.price);

    } else if (sort === "high") {

        filtered.sort((a, b) => b.price - a.price);

    } else if (sort === "rating") {

        filtered.sort((a, b) => b.rating - a.rating);

    } else if (sort === "name") {

        filtered.sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    }


    if (!filtered.length) {

        container.innerHTML = emptyState(
            "🌷",
            "No flowers found",
            "Try changing your search or filters."
        );

        return;

    }


    container.innerHTML = filtered.map(productCard).join("");

}


function productCard(product) {

    const isWishlisted =
        wishlist.includes(product.id);


    const outOfStock =
        product.stock <= 0;


    const discount =
        product.oldPrice > product.price
            ? Math.round(
                ((product.oldPrice - product.price) /
                    product.oldPrice) * 100
            )
            : 0;


    return `

        <div class="product-card ${outOfStock ? "out-stock" : ""}">

            <div class="product-image">

                ${discount > 0
                    ? `<span class="product-discount">${discount}% OFF</span>`
                    : ""
                }

                <button
                    class="product-heart"
                    onclick="toggleWishlist(${product.id})"
                >
                    ${isWishlisted ? "❤️" : "♡"}
                </button>

                <span>${product.emoji}</span>

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${escapeHtml(product.category)}
                </div>

                <div class="product-name">
                    ${escapeHtml(product.name)}
                </div>

                <div class="product-description">
                    ${escapeHtml(product.description)}
                </div>

                <div class="rating">
                    ⭐ ${product.rating}
                </div>


                <div class="product-price-row">

                    <div class="product-price">

                        ${formatCurrency(product.price)}

                        ${
                            product.oldPrice
                                ? `<span class="old-price">
                                    ${formatCurrency(product.oldPrice)}
                                   </span>`
                                : ""
                        }

                    </div>


                    <button
                        class="add-cart-btn"
                        onclick="addToCart(${product.id})"
                        ${outOfStock ? "disabled" : ""}
                    >
                        ${outOfStock ? "×" : "+"}
                    </button>

                </div>

            </div>

        </div>

    `;

}


function filterOccasion(occasion, button) {

    currentOccasion = occasion;


    document.querySelectorAll(".occasion-btn")
        .forEach(btn => btn.classList.remove("active"));


    button.classList.add("active");


    renderShop();

}


/* =========================================================
   PRODUCTS CRUD
========================================================= */

function renderProductsTable() {

    const table = document.getElementById("productsTable");

    if (!table) return;


    const search =
        (document.getElementById("productSearch")?.value || "")
        .toLowerCase();


    const category =
        document.getElementById("productCategoryFilter")?.value || "all";


    const filtered = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(search);


        const matchesCategory =
            category === "all" ||
            product.category === category;


        return matchesSearch && matchesCategory;

    });


    if (!filtered.length) {

        table.innerHTML = `
            <tr>
                <td colspan="7">
                    <div class="empty-state">
                        No products found.
                    </div>
                </td>
            </tr>
        `;

        return;

    }


    table.innerHTML = filtered.map(product => {

        const stockClass =
            product.stock === 0
                ? "stock-out"
                : product.stock <= 10
                    ? "stock-low"
                    : "stock-good";


        const stockText =
            product.stock === 0
                ? "Out of Stock"
                : product.stock <= 10
                    ? "Low Stock"
                    : "In Stock";


        return `

            <tr>

                <td>

                    <div class="table-product">

                        <div class="table-product-icon">
                            ${product.emoji}
                        </div>

                        <div>

                            <strong>
                                ${escapeHtml(product.name)}
                            </strong>

                            <small>
                                ID: FL-${product.id}
                            </small>

                        </div>

                    </div>

                </td>


                <td>
                    ${escapeHtml(product.category)}
                </td>


                <td>
                    <strong>${formatCurrency(product.price)}</strong>
                </td>


                <td>
                    <span class="${stockClass}">
                        ${product.stock}
                    </span>
                </td>


                <td>
                    ⭐ ${product.rating}
                </td>


                <td>

                    <span class="status-badge ${
                        product.stock === 0
                            ? "status-Cancelled"
                            : product.stock <= 10
                                ? "status-Pending"
                                : "status-Delivered"
                    }">

                        ${stockText}

                    </span>

                </td>


                <td>

                    <div class="action-buttons">

                        <button
                            class="action-btn"
                            onclick="editProduct(${product.id})"
                            title="Edit"
                        >
                            ✏️
                        </button>

                        <button
                            class="action-btn delete"
                            onclick="deleteProduct(${product.id})"
                            title="Delete"
                        >
                            🗑️
                        </button>

                    </div>

                </td>

            </tr>

        `;

    }).join("");

}


function openProductModal(product = null) {

    document.getElementById("productForm").reset();

    document.getElementById("editProductId").value = "";

    document.getElementById("productModalTitle").textContent =
        product ? "Edit Flower" : "Add New Flower";


    if (product) {

        document.getElementById("editProductId").value =
            product.id;

        document.getElementById("productName").value =
            product.name;

        document.getElementById("productCategory").value =
            product.category;

        document.getElementById("productPrice").value =
            product.price;

        document.getElementById("productStock").value =
            product.stock;

        document.getElementById("productEmoji").value =
            product.emoji;

        document.getElementById("productRating").value =
            product.rating;

        document.getElementById("productDescription").value =
            product.description;


        document.querySelectorAll(
            'input[name="occasion"]'
        ).forEach(checkbox => {

            checkbox.checked =
                product.occasions.includes(checkbox.value);

        });

    }


    openModal("productModal");

}


function editProduct(id) {

    const product = products.find(item => item.id === id);

    if (product) {

        openProductModal(product);

    }

}


function saveProduct(event) {

    event.preventDefault();


    const id =
        Number(document.getElementById("editProductId").value);


    const name =
        document.getElementById("productName").value.trim();


    const category =
        document.getElementById("productCategory").value;


    const price =
        Number(document.getElementById("productPrice").value);


    const stock =
        Number(document.getElementById("productStock").value);


    const emoji =
        document.getElementById("productEmoji").value.trim() || "🌸";


    const rating =
        Number(document.getElementById("productRating").value);


    const description =
        document.getElementById("productDescription").value.trim();


    const occasions =
        [...document.querySelectorAll(
            'input[name="occasion"]:checked'
        )].map(input => input.value);


    if (price <= 0) {

        showToast("Price must be greater than 0.", "error");

        return;

    }


    if (stock < 0) {

        showToast("Stock cannot be negative.", "error");

        return;

    }


    if (id) {

        const index =
            products.findIndex(product => product.id === id);


        if (index !== -1) {

            products[index] = {

                ...products[index],

                name,

                category,

                price,

                stock,

                emoji,

                rating,

                description,

                occasions

            };

        }


        showToast("Product updated successfully.", "success");

    } else {

        products.push({

            id: Date.now(),

            name,

            category,

            price,

            oldPrice: Math.round(price * 1.2),

            stock,

            rating,

            emoji,

            description,

            occasions

        });


        showToast("New flower added successfully. 🌸", "success");

    }


    saveData("bloom_products", products);

    closeModal("productModal");

    renderProductsTable();

    renderShop();

    renderInventory();

    updateDashboard();

}


function deleteProduct(id) {

    const product =
        products.find(item => item.id === id);


    if (!product) return;


    if (!confirm(
        `Delete "${product.name}"? This action cannot be undone.`
    )) {
        return;
    }


    products =
        products.filter(item => item.id !== id);


    saveData("bloom_products", products);


    showToast("Product deleted.", "success");

    renderProductsTable();

    renderShop();

    renderInventory();

    updateDashboard();

}


/* =========================================================
   CART
========================================================= */

function addToCart(productId) {

    const product =
        products.find(item => item.id === productId);


    if (!product) return;


    if (product.stock <= 0) {

        showToast("This product is out of stock.", "error");

        return;

    }


    const existing =
        cart.find(item => item.productId === productId);


    if (existing) {

        if (existing.quantity >= product.stock) {

            showToast(
                `Only ${product.stock} items available.`,
                "warning"
            );

            return;

        }

        existing.quantity++;

    } else {

        cart.push({

            productId,

            quantity: 1

        });

    }


    saveData("bloom_cart", cart);


    updateCartCount();

    renderCart();


    showToast(
        `${product.name} added to cart 🛒`,
        "success"
    );

}


function updateCartCount() {

    const count =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );


    document.getElementById("cartCount").textContent = count;

}


function renderCart() {

    const container =
        document.getElementById("cartItems");


    if (!container) return;


    updateCartCount();


    if (!cart.length) {

        container.innerHTML = emptyState(
            "🛒",
            "Your cart is empty",
            "Add some beautiful flowers to get started."
        );


        updateCartSummary();

        return;

    }


    container.innerHTML = cart.map(item => {

        const product =
            products.find(
                product => product.id === item.productId
            );


        if (!product) return "";


        const total =
            product.price * item.quantity;


        return `

            <div class="cart-item">

                <div class="cart-item-image">
                    ${product.emoji}
                </div>


                <div class="cart-item-info">

                    <strong>
                        ${escapeHtml(product.name)}
                    </strong>

                    <small>
                        ${formatCurrency(product.price)} each
                    </small>

                </div>


                <div class="quantity-control">

                    <button
                        onclick="changeCartQuantity(
                            ${product.id},
                            -1
                        )"
                    >
                        −
                    </button>

                    <strong>
                        ${item.quantity}
                    </strong>

                    <button
                        onclick="changeCartQuantity(
                            ${product.id},
                            1
                        )"
                    >
                        +
                    </button>

                </div>


                <div class="cart-item-price">
                    ${formatCurrency(total)}
                </div>


                <button
                    class="action-btn delete"
                    onclick="removeFromCart(${product.id})"
                >
                    🗑️
                </button>

            </div>

        `;

    }).join("");


    updateCartSummary();

}


function changeCartQuantity(productId, change) {

    const item =
        cart.find(item => item.productId === productId);


    const product =
        products.find(product => product.id === productId);


    if (!item || !product) return;


    const newQuantity =
        item.quantity + change;


    if (newQuantity <= 0) {

        removeFromCart(productId);

        return;

    }


    if (newQuantity > product.stock) {

        showToast(
            `Only ${product.stock} items available.`,
            "warning"
        );

        return;

    }


    item.quantity = newQuantity;


    saveData("bloom_cart", cart);

    renderCart();

}


function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.productId !== productId
        );


    saveData("bloom_cart", cart);

    renderCart();

    showToast("Item removed from cart.", "success");

}


function updateCartSummary() {

    let subtotal = 0;


    cart.forEach(item => {

        const product =
            products.find(
                product => product.id === item.productId
            );


        if (product) {

            subtotal +=
                product.price * item.quantity;

        }

    });


    const discount =
        Math.round(subtotal * couponDiscount);


    const delivery =
        subtotal > 0 ? 50 : 0;


    const total =
        subtotal - discount + delivery;


    document.getElementById("cartSubtotal").textContent =
        formatCurrency(subtotal);


    document.getElementById("cartDiscount").textContent =
        `-${formatCurrency(discount)}`;


    document.getElementById("cartDelivery").textContent =
        formatCurrency(delivery);


    document.getElementById("cartTotal").textContent =
        formatCurrency(total);


    document.getElementById("checkoutTotal").textContent =
        formatCurrency(total);

}


function applyCoupon() {

    const code =
        document.getElementById("couponInput")
        .value
        .trim()
        .toUpperCase();


    const message =
        document.getElementById("couponMessage");


    const coupons = {

        FLOWER10: 0.10,

        BLOOM20: 0.20,

        WELCOME15: 0.15

    };


    if (!coupons[code]) {

        couponDiscount = 0;

        message.textContent =
            "Invalid coupon code.";

        message.style.color =
            "var(--danger)";


        updateCartSummary();

        return;

    }


    couponDiscount = coupons[code];


    message.textContent =
        `${couponDiscount * 100}% discount applied! 🎉`;

    message.style.color =
        "var(--green)";


    updateCartSummary();


    showToast("Coupon applied successfully!", "success");

}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(productId) {

    if (wishlist.includes(productId)) {

        wishlist =
            wishlist.filter(id => id !== productId);

        showToast("Removed from wishlist.", "success");

    } else {

        wishlist.push(productId);

        showToast("Added to wishlist ❤️", "success");

    }


    saveData("bloom_wishlist", wishlist);

    renderShop();

    renderWishlist();

}


function renderWishlist() {

    const container =
        document.getElementById("wishlistGrid");


    if (!container) return;


    const items =
        products.filter(
            product => wishlist.includes(product.id)
        );


    if (!items.length) {

        container.innerHTML = emptyState(
            "❤️",
            "Your wishlist is empty",
            "Tap the heart on flowers you love."
        );

        return;

    }


    container.innerHTML =
        items.map(productCard).join("");

}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckoutModal() {

    if (!cart.length) {

        showToast(
            "Your cart is empty.",
            "warning"
        );

        return;

    }


    const customer =
        customers.find(
            item =>
                currentUser &&
                item.email === currentUser.email
        );


    document.getElementById("checkoutName").value =
        customer?.name || currentUser.name || "";


    document.getElementById("checkoutPhone").value =
        customer?.phone || currentUser.phone || "";


    document.getElementById("checkoutAddress").value =
        customer?.address || "";


    const date =
        new Date();


    date.setDate(
        date.getDate() + 1
    );


    document.getElementById("checkoutDate").min =
        new Date().toISOString().split("T")[0];


    document.getElementById("checkoutDate").value =
        date.toISOString().split("T")[0];


    updateCartSummary();

    openModal("checkoutModal");

}


function placeOrder(event) {

    event.preventDefault();


    if (!cart.length) {

        showToast("Your cart is empty.", "error");

        return;

    }


    const name =
        document.getElementById("checkoutName").value.trim();


    const phone =
        document.getElementById("checkoutPhone").value.trim();


    const address =
        document.getElementById("checkoutAddress").value.trim();


    const deliveryDate =
        document.getElementById("checkoutDate").value;


    const deliveryTime =
        document.getElementById("checkoutTime").value;


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        ).value;


    const message =
        document.getElementById("checkoutMessage").value.trim();


    if (!/^\d{10}$/.test(phone)) {

        showToast(
            "Please enter a valid 10 digit phone number.",
            "error"
        );

        return;

    }


    let subtotal = 0;

    const orderItems = [];


    for (const cartItem of cart) {

        const product =
            products.find(
                item => item.id === cartItem.productId
            );


        if (!product) continue;


        if (cartItem.quantity > product.stock) {

            showToast(
                `${product.name} does not have enough stock.`,
                "error"
            );

            return;

        }


        subtotal +=
            product.price * cartItem.quantity;


        orderItems.push({

            productId: product.id,

            name: product.name,

            emoji: product.emoji,

            quantity: cartItem.quantity,

            price: product.price

        });

    }


    const discount =
        Math.round(subtotal * couponDiscount);


    const delivery = 50;


    const total =
        subtotal - discount + delivery;


    const orderId =
        Math.floor(
            1000 +
            Math.random() * 8999
        );


    const newOrder = {

        id: orderId,

        customerId: currentUser.id,

        customerName: name,

        items: orderItems,

        total,

        status: "Pending",

        date: new Date().toISOString().split("T")[0],

        address,

        deliveryDate,

        deliveryTime,

        payment,

        message

    };


    orders.unshift(newOrder);


    orderItems.forEach(item => {

        const product =
            products.find(
                product => product.id === item.productId
            );


        if (product) {

            product.stock -= item.quantity;

        }

    });


    const customer =
        customers.find(
            item => item.email === currentUser.email
        );


    if (customer) {

        customer.orders++;

        customer.spent += total;

        customer.address = address;

    }


    currentUser.phone = phone;


    users =
        users.map(
            user =>
                user.id === currentUser.id
                    ? {
                        ...user,
                        phone
                    }
                    : user
        );


    cart = [];

    couponDiscount = 0;


    saveData("bloom_orders", orders);

    saveData("bloom_products", products);

    saveData("bloom_customers", customers);

    saveData("bloom_users", users);

    saveData("bloom_cart", cart);

    saveData("bloom_current_user", currentUser);


    notifications.unshift({

        id: Date.now(),

        icon: "🌸",

        text: `Order #${orderId} placed successfully.`,

        time: "Just now",

        read: false

    });


    saveData("bloom_notifications", notifications);


    closeModal("checkoutModal");


    document.getElementById("checkoutForm").reset();


    renderCart();

    renderOrders();

    renderInventory();

    renderShop();

    updateDashboard();

    renderNotifications();

    renderProfile();


    showToast(
        `Order #${orderId} placed successfully! 🌸`,
        "success"
    );


    navigate("orders");

}


/* =========================================================
   ORDERS
========================================================= */

function renderOrders() {

    const container =
        document.getElementById("ordersList");


    if (!container) return;


    let visibleOrders = [...orders];


    if (currentUser?.role === "customer") {

        visibleOrders =
            visibleOrders.filter(
                order =>
                    order.customerId === currentUser.id
            );

    }


    if (currentOrderFilter !== "all") {

        visibleOrders =
            visibleOrders.filter(
                order =>
                    order.status === currentOrderFilter
            );

    }


    if (!visibleOrders.length) {

        container.innerHTML = emptyState(
            "📦",
            "No orders found",
            "Orders will appear here."
        );

        return;

    }


    container.innerHTML =
        visibleOrders.map(orderCard).join("");

}


function orderCard(order) {

    const nextStatus =
        getNextStatus(order.status);


    return `

        <div class="order-card">

            <div class="order-card-header">

                <div>

                    <div class="order-number">
                        #${order.id}
                    </div>

                    <div class="order-date">
                        ${formatDate(order.date)}
                        ${
                            currentUser.role !== "customer"
                                ? ` • ${escapeHtml(order.customerName)}`
                                : ""
                        }
                    </div>

                </div>


                <span class="status-badge ${getStatusClass(order.status)}">
                    ${order.status}
                </span>

            </div>


            <div class="order-card-body">

                <div class="order-items">

                    ${order.items.map(item => `

                        <div class="order-item-chip">
                            ${item.emoji}
                            ${escapeHtml(item.name)}
                            × ${item.quantity}
                        </div>

                    `).join("")}

                </div>


                <div>

                    <strong>
                        Delivery:
                    </strong>

                    ${formatDate(order.deliveryDate)}
                    • ${escapeHtml(order.deliveryTime)}

                </div>

            </div>


            <div class="order-card-footer">

                <div class="order-total">

                    ${formatCurrency(order.total)}

                </div>


                <div class="order-actions">

                    <button
                        class="secondary-btn"
                        onclick="viewOrder(${order.id})"
                    >
                        View Details
                    </button>


                    ${
                        currentUser.role !== "customer" &&
                        nextStatus
                            ? `
                            <button
                                class="primary-btn"
                                onclick="advanceOrder(${order.id})"
                            >
                                ${nextStatus}
                            </button>
                            `
                            : ""
                    }

                </div>

            </div>

        </div>

    `;

}


function filterOrders(filter, button) {

    currentOrderFilter = filter;


    document.querySelectorAll(".order-tab")
        .forEach(tab => tab.classList.remove("active"));


    button.classList.add("active");


    renderOrders();

}


function getNextStatus(status) {

    const workflow = {

        Pending: "Confirm Order",

        Confirmed: "Start Preparing",

        Preparing: "Out for Delivery",

        "Out for Delivery": "Mark Delivered",

        Delivered: null,

        Cancelled: null

    };


    return workflow[status];

}


function advanceOrder(id) {

    const order =
        orders.find(order => order.id === id);


    if (!order) return;


    const transitions = {

        Pending: "Confirmed",

        Confirmed: "Preparing",

        Preparing: "Out for Delivery",

        "Out for Delivery": "Delivered"

    };


    if (!transitions[order.status]) return;


    order.status =
        transitions[order.status];


    saveData("bloom_orders", orders);


    notifications.unshift({

        id: Date.now(),

        icon: "📦",

        text: `Order #${id} is now ${order.status}.`,

        time: "Just now",

        read: false

    });


    saveData("bloom_notifications", notifications);


    showToast(
        `Order #${id} updated to ${order.status}.`,
        "success"
    );


    renderOrders();

    renderNotifications();

    updateDashboard();

    renderReports();

}


function viewOrder(id) {

    const order =
        orders.find(order => order.id === id);


    if (!order) return;


    document.getElementById("orderModalTitle").textContent =
        `Order #${order.id}`;


    const steps = [
        "Pending",
        "Confirmed",
        "Preparing",
        "Out for Delivery",
        "Delivered"
    ];


    const currentIndex =
        steps.indexOf(order.status);


    const tracker =
        order.status === "Cancelled"
            ? ""
            : `
                <div class="order-tracker">

                    ${steps.map((step, index) => `

                        <div class="tracker-step ${
                            index < currentIndex
                                ? "completed"
                                : index === currentIndex
                                    ? "current"
                                    : ""
                        }">

                            <div class="tracker-circle">
                                ${
                                    index < currentIndex
                                        ? "✓"
                                        : index + 1
                                }
                            </div>

                            <span>${step}</span>

                        </div>

                    `).join("")}

                </div>
            `;


    document.getElementById("orderModalContent").innerHTML = `

        ${tracker}


        <div class="panel">

            <h3>Customer</h3>

            <p style="margin-top:8px;">
                <strong>${escapeHtml(order.customerName)}</strong>
            </p>

            <p style="color:var(--text-light);">
                ${escapeHtml(order.address)}
            </p>

        </div>


        <div class="panel">

            <h3>Items</h3>

            ${order.items.map(item => `

                <div class="cart-item">

                    <div class="cart-item-image">
                        ${item.emoji}
                    </div>

                    <div class="cart-item-info">

                        <strong>
                            ${escapeHtml(item.name)}
                        </strong>

                        <small>
                            ${item.quantity} ×
                            ${formatCurrency(item.price)}
                        </small>

                    </div>

                    <div class="cart-item-price">
                        ${formatCurrency(
                            item.price * item.quantity
                        )}
                    </div>

                </div>

            `).join("")}

        </div>


        <div class="panel">

            <div class="summary-line">

                <span>Delivery Date</span>

                <strong>
                    ${formatDate(order.deliveryDate)}
                </strong>

            </div>

            <div class="summary-line">

                <span>Delivery Time</span>

                <strong>
                    ${escapeHtml(order.deliveryTime)}
                </strong>

            </div>

            <div class="summary-line">

                <span>Payment</span>

                <strong>
                    ${escapeHtml(order.payment)}
                </strong>

            </div>

            <div class="summary-line">

                <span>Gift Message</span>

                <strong>
                    ${escapeHtml(order.message || "None")}
                </strong>

            </div>

            <hr>

            <div class="summary-total">

                <span>Total</span>

                <strong>
                    ${formatCurrency(order.total)}
                </strong>

            </div>

        </div>

    `;


    openModal("orderModal");

}


/* =========================================================
   CUSTOMERS
========================================================= */

function renderCustomers() {

    const table =
        document.getElementById("customersTable");


    if (!table) return;


    const search =
        (
            document.getElementById("customerSearch")
                ?.value || ""
        ).toLowerCase();


    const filtered =
        customers.filter(customer =>

            customer.name
                .toLowerCase()
                .includes(search) ||

            customer.email
                .toLowerCase()
                .includes(search)

        );


    if (!filtered.length) {

        table.innerHTML = `

            <tr>

                <td colspan="6">

                    <div class="empty-state">
                        No customers found.
                    </div>

                </td>

            </tr>

        `;

        return;

    }


    table.innerHTML =
        filtered.map(customer => `

            <tr>

                <td>

                    <div class="table-product">

                        <div class="avatar">
                            ${customer.name.charAt(0)}
                        </div>

                        <div>

                            <strong>
                                ${escapeHtml(customer.name)}
                            </strong>

                            <small>
                                #CUS-${customer.id}
                            </small>

                        </div>

                    </div>

                </td>


                <td>

                    ${escapeHtml(customer.email)}

                    <br>

                    <small>
                        ${escapeHtml(customer.phone)}
                    </small>

                </td>


                <td>
                    ${customer.orders}
                </td>


                <td>
                    <strong>
                        ${formatCurrency(customer.spent)}
                    </strong>
                </td>


                <td>

                    <span class="status-badge ${
                        customer.status === "Active"
                            ? "status-Delivered"
                            : "status-Cancelled"
                    }">

                        ${customer.status}

                    </span>

                </td>


                <td>

                    <div class="action-buttons">

                        <button
                            class="action-btn"
                            onclick="toggleCustomerStatus(${customer.id})"
                        >
                            ${
                                customer.status === "Active"
                                    ? "⏸"
                                    : "▶"
                            }
                        </button>

                        <button
                            class="action-btn delete"
                            onclick="deleteCustomer(${customer.id})"
                        >
                            🗑️
                        </button>

                    </div>

                </td>

            </tr>

        `).join("");

}


function openCustomerModal() {

    document.getElementById("customerForm").reset();

    openModal("customerModal");

}


function saveCustomer(event) {

    event.preventDefault();


    const name =
        document.getElementById("customerName").value.trim();


    const email =
        document.getElementById("customerEmail").value.trim();


    const phone =
        document.getElementById("customerPhone").value.trim();


    const address =
        document.getElementById("customerAddress").value.trim();


    if (!/^\d{10}$/.test(phone)) {

        showToast(
            "Enter a valid 10 digit phone number.",
            "error"
        );

        return;

    }


    if (
        customers.some(
            customer =>
                customer.email.toLowerCase() ===
                email.toLowerCase()
        )
    ) {

        showToast(
            "Customer already exists.",
            "error"
        );

        return;

    }


    customers.push({

        id: Date.now(),

        name,

        email,

        phone,

        address,

        orders: 0,

        spent: 0,

        status: "Active"

    });


    saveData("bloom_customers", customers);


    closeModal("customerModal");


    renderCustomers();

    updateDashboard();


    showToast(
        "Customer added successfully.",
        "success"
    );

}


function toggleCustomerStatus(id) {

    const customer =
        customers.find(item => item.id === id);


    if (!customer) return;


    customer.status =
        customer.status === "Active"
            ? "Inactive"
            : "Active";


    saveData("bloom_customers", customers);


    renderCustomers();

    showToast(
        "Customer status updated.",
        "success"
    );

}


function deleteCustomer(id) {

    const customer =
        customers.find(item => item.id === id);


    if (!customer) return;


    if (!confirm(
        `Delete ${customer.name}?`
    )) {
        return;
    }


    customers =
        customers.filter(
            item => item.id !== id
        );


    saveData("bloom_customers", customers);


    renderCustomers();

    updateDashboard();


    showToast(
        "Customer deleted.",
        "success"
    );

}


/* =========================================================
   INVENTORY
========================================================= */

function renderInventory() {

    const container =
        document.getElementById("inventoryGrid");


    if (!container) return;


    const low =
        products.filter(
            product =>
                product.stock > 0 &&
                product.stock <= 10
        );


    const out =
        products.filter(
            product =>
                product.stock === 0
        );


    document.getElementById("inventoryTotal").textContent =
        products.reduce(
            (sum, product) =>
                sum + product.stock,
            0
        );


    document.getElementById("inventoryLow").textContent =
        low.length;


    document.getElementById("inventoryOut").textContent =
        out.length;


    container.innerHTML =
        products.map(product => {

            const status =
                product.stock === 0
                    ? "Out of Stock"
                    : product.stock <= 10
                        ? "Low Stock"
                        : "In Stock";


            const percentage =
                Math.min(
                    100,
                    (product.stock / 40) * 100
                );


            return `

                <div class="inventory-card">

                    <div class="inventory-card-top">

                        <div class="inventory-icon">
                            ${product.emoji}
                        </div>

                        <span class="status-badge ${
                            product.stock === 0
                                ? "status-Cancelled"
                                : product.stock <= 10
                                    ? "status-Pending"
                                    : "status-Delivered"
                        }">
                            ${status}
                        </span>

                    </div>


                    <h3>
                        ${escapeHtml(product.name)}
                    </h3>

                    <p>
                        ${escapeHtml(product.category)}
                    </p>


                    <div class="stock-bar">

                        <div
                            class="stock-fill ${
                                product.stock === 0
                                    ? "empty"
                                    : product.stock <= 10
                                        ? "low"
                                        : ""
                            }"
                            style="width:${percentage}%"
                        ></div>

                    </div>


                    <div style="
                        display:flex;
                        justify-content:space-between;
                        font-size:11px;
                    ">

                        <span>
                            Current Stock
                        </span>

                        <strong>
                            ${product.stock} units
                        </strong>

                    </div>

                </div>

            `;

        }).join("");

}


/* =========================================================
   USERS
========================================================= */

function renderUsers() {

    const table =
        document.getElementById("usersTable");


    if (!table) return;


    table.innerHTML =
        users.map(user => `

            <tr>

                <td>

                    <div class="table-product">

                        <div class="avatar">
                            ${user.name.charAt(0)}
                        </div>

                        <div>

                            <strong>
                                ${escapeHtml(user.name)}
                            </strong>

                            <small>
                                #USR-${user.id}
                            </small>

                        </div>

                    </div>

                </td>


                <td>
                    ${escapeHtml(user.email)}
                </td>


                <td>

                    <span class="role-badge">

                        ${getRoleName(user.role)}

                    </span>

                </td>


                <td>

                    <span class="status-badge ${
                        user.status === "Active"
                            ? "status-Delivered"
                            : "status-Cancelled"
                    }">

                        ${user.status}

                    </span>

                </td>


                <td>

                    <button
                        class="action-btn"
                        onclick="toggleUserStatus(${user.id})"
                    >
                        ${
                            user.status === "Active"
                                ? "⏸"
                                : "▶"
                        }
                    </button>

                </td>

            </tr>

        `).join("");

}


function toggleUserStatus(id) {

    const user =
        users.find(item => item.id === id);


    if (!user) return;


    user.status =
        user.status === "Active"
            ? "Inactive"
            : "Active";


    saveData("bloom_users", users);


    renderUsers();


    showToast(
        "User status updated.",
        "success"
    );

}


/* =========================================================
   REPORTS
========================================================= */

function renderReports() {

    const revenue =
        orders.reduce(
            (sum, order) =>
                sum + order.total,
            0
        );


    const average =
        orders.length
            ? Math.round(
                revenue / orders.length
            )
            : 0;


    const delivered =
        orders.filter(
            order =>
                order.status === "Delivered"
        ).length;


    const categorySales = {};


    orders.forEach(order => {

        order.items.forEach(item => {

            const product =
                products.find(
                    product =>
                        product.id === item.productId
                );


            if (!product) return;


            categorySales[product.category] =
                (categorySales[product.category] || 0) +
                item.quantity;

        });

    });


    const topCategory =
        Object.entries(categorySales)
            .sort((a, b) => b[1] - a[1])[0];


    document.getElementById("reportRevenue").textContent =
        formatCurrency(revenue);


    document.getElementById("reportAverage").textContent =
        formatCurrency(average);


    document.getElementById("reportDelivered").textContent =
        delivered;


    document.getElementById("reportCategory").textContent =
        topCategory
            ? topCategory[0]
            : "-";


    renderStatusReport();

    renderCategoryReport();

}


function renderStatusReport() {

    const container =
        document.getElementById("orderStatusReport");


    const statuses = [
        "Pending",
        "Confirmed",
        "Preparing",
        "Out for Delivery",
        "Delivered",
        "Cancelled"
    ];


    container.innerHTML =
        statuses.map(status => {

            const count =
                orders.filter(
                    order =>
                        order.status === status
                ).length;


            const percentage =
                orders.length
                    ? Math.round(
                        (count / orders.length) * 100
                    )
                    : 0;


            return `

                <div class="status-report-item">

                    <div class="status-report-label">

                        <span>${status}</span>

                        <strong>
                            ${count}
                        </strong>

                    </div>


                    <div class="report-bar">

                        <div style="width:${percentage}%"></div>

                    </div>

                </div>

            `;

        }).join("");

}


function renderCategoryReport() {

    const container =
        document.getElementById("categoryReport");


    const categoryCount = {};


    products.forEach(product => {

        categoryCount[product.category] =
            (categoryCount[product.category] || 0) + 1;

    });


    container.innerHTML =
        Object.entries(categoryCount)
            .sort((a, b) => b[1] - a[1])
            .map(([category, count]) => `

                <div class="category-report-item">

                    <span>
                        ${escapeHtml(category)}
                    </span>

                    <strong>
                        ${count} products
                    </strong>

                </div>

            `)
            .join("");

}


function printReport() {

    window.print();

}


/* =========================================================
   PROFILE
========================================================= */

function renderProfile() {

    if (!currentUser) return;


    document.getElementById("profileAvatar").textContent =
        currentUser.name.charAt(0).toUpperCase();


    document.getElementById("profileName").textContent =
        currentUser.name;


    document.getElementById("profileRole").textContent =
        getRoleName(currentUser.role);


    const userOrders =
        orders.filter(
            order =>
                order.customerId === currentUser.id
        );


    const spent =
        userOrders.reduce(
            (sum, order) =>
                sum + order.total,
            0
        );


    document.getElementById("profileOrders").textContent =
        userOrders.length;


    document.getElementById("profileSpent").textContent =
        formatCurrency(spent);


    document.getElementById("profileFullName").value =
        currentUser.name;


    document.getElementById("profilePhone").value =
        currentUser.phone || "";


    document.getElementById("profileEmail").value =
        currentUser.email;


    const customer =
        customers.find(
            item =>
                item.email === currentUser.email
        );


    document.getElementById("profileAddress").value =
        customer?.address || "";

}


function updateProfile(event) {

    event.preventDefault();


    const name =
        document.getElementById("profileFullName").value.trim();


    const phone =
        document.getElementById("profilePhone").value.trim();


    const email =
        document.getElementById("profileEmail").value.trim();


    const address =
        document.getElementById("profileAddress").value.trim();


    if (!/^\d{10}$/.test(phone)) {

        showToast(
            "Please enter a valid 10 digit phone number.",
            "error"
        );

        return;

    }


    currentUser.name = name;

    currentUser.phone = phone;

    currentUser.email = email;


    users =
        users.map(
            user =>
                user.id === currentUser.id
                    ? currentUser
                    : user
        );


    const customer =
        customers.find(
            item =>
                item.id === currentUser.id ||
                item.email === email
        );


    if (customer) {

        customer.name = name;

        customer.phone = phone;

        customer.email = email;

        customer.address = address;

    }


    saveData("bloom_current_user", currentUser);

    saveData("bloom_users", users);

    saveData("bloom_customers", customers);


    setupUserInterface();

    renderProfile();

    renderCustomers();


    showToast(
        "Profile updated successfully.",
        "success"
    );

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function renderNotifications() {

    const container =
        document.getElementById("notificationList");


    if (!container) return;


    const unread =
        notifications.filter(
            item => !item.read
        ).length;


    document.getElementById("notificationDot").style.display =
        unread > 0 ? "block" : "none";


    if (!notifications.length) {

        container.innerHTML =
            `<div class="empty-state">
                No notifications.
             </div>`;

        return;

    }


    container.innerHTML =
        notifications.slice(0, 10).map(notification => `

            <div class="notification">

                <div class="notification-icon">
                    ${notification.icon}
                </div>

                <div>

                    <p>
                        ${escapeHtml(notification.text)}
                    </p>

                    <small>
                        ${notification.time}
                    </small>

                </div>

            </div>

        `).join("");

}


function toggleNotifications() {

    document
        .getElementById("notificationPanel")
        .classList.toggle("show");

}


function markNotificationsRead() {

    notifications =
        notifications.map(
            notification => ({
                ...notification,
                read: true
            })
        );


    saveData(
        "bloom_notifications",
        notifications
    );


    renderNotifications();

    showToast(
        "Notifications marked as read.",
        "success"
    );

}


/* =========================================================
   UI HELPERS
========================================================= */

function toggleTheme() {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "bloom_theme",
        isDark ? "dark" : "light"
    );


    document.getElementById("themeIcon").textContent =
        isDark ? "☀️" : "🌙";


    setTimeout(
        renderChart,
        100
    );

}


function loadTheme() {

    const theme =
        localStorage.getItem("bloom_theme");


    if (theme === "dark") {

        document.body.classList.add("dark");

        document.getElementById("themeIcon").textContent =
            "☀️";

    }

}


function toggleSidebar() {

    document
        .getElementById("sidebar")
        .classList.toggle("open");

}


function openModal(id) {

    document
        .getElementById(id)
        .classList.add("show");

}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("show");

}


function showToast(message, type = "success") {

    const container =
        document.getElementById("toastContainer");


    const toast =
        document.createElement("div");


    toast.className =
        `toast ${type}`;


    const icon =
        type === "success"
            ? "✓"
            : type === "error"
                ? "!"
                : "⚠";


    toast.innerHTML = `

        <strong>${icon}</strong>

        <span>
            ${escapeHtml(message)}
        </span>

    `;


    container.appendChild(toast);


    setTimeout(() => {

        toast.style.opacity = "0";

        toast.style.transform =
            "translateX(30px)";


        setTimeout(
            () => toast.remove(),
            300
        );

    }, 3000);

}


function emptyState(icon, title, message) {

    return `

        <div class="empty-state">

            <div class="empty-icon">
                ${icon}
            </div>

            <h3>
                ${escapeHtml(title)}
            </h3>

            <p>
                ${escapeHtml(message)}
            </p>

        </div>

    `;

}


/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

function formatCurrency(amount) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(amount);

}


function formatDate(dateString) {

    if (!dateString) return "-";


    const date =
        new Date(dateString);


    if (isNaN(date)) return dateString;


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


function getStatusClass(status) {

    return "status-" +
        status.replaceAll(" ", "-");

}


function escapeHtml(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   INITIAL THEME
========================================================= */

loadTheme();


/* =========================================================
   MODAL CLICK OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

    document.querySelectorAll(".modal.show")
        .forEach(modal => {

            if (event.target === modal) {

                modal.classList.remove("show");

            }

        });


    const notificationPanel =
        document.getElementById("notificationPanel");


    const notificationButton =
        event.target.closest(".icon-btn");


    if (
        notificationPanel.classList.contains("show") &&
        !notificationPanel.contains(event.target) &&
        !notificationButton
    ) {

        notificationPanel.classList.remove("show");

    }

});


/* =========================================================
   WINDOW RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            document
                .getElementById("dashboardPage")
                .classList.contains("active-page")
        ) {

            renderChart();

        }

    }
);