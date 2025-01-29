// Menu Items Data
const menuItems = [
    {
        id: 1,
        name: "Butter Chicken",
        description: "Tender chicken in rich tomato-based curry with butter and cream",
        price: 299,
        image: "https://th.bing.com/th/id/OIP.KKyrmbNcoQc879W5SX_-SQHaLG?w=202&h=303&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        rating: 4.8,
        reviews: 245,
        isPopular: true
    },
    {
        id: 2,
        name: "Paneer Tikka",
        description: "Grilled cottage cheese marinated in spiced yogurt",
        price: 249,
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=500",
        rating: 4.6,
        reviews: 180,
        isPopular: true
    },
    {
        id: 3,
        name: "Dal Makhani",
        description: "Creamy black lentils slow-cooked overnight",
        price: 199,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500",
        rating: 4.7,
        reviews: 156
    },
    {
        id: 4,
        name: "Biryani",
        description: "Fragrant basmati rice with aromatic spices and tender meat",
        price: 349,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500",
        rating: 4.9,
        reviews: 320,
        isPopular: true
    },
    {
        id: 5,
        name: "Gulab Jamun",
        description: "Deep-fried milk solids soaked in sugar syrup",
        price: 99,
        image: "https://th.bing.com/th/id/OIP.D8wTJQTUfdxqXubUnLE33QHaFk?w=260&h=195&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        rating: 4.5,
        reviews: 198
    }
];

// DOM Elements
const loginSection = document.getElementById('loginSection');
const mainContent = document.getElementById('mainContent');
const loginForm = document.getElementById('loginForm');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

// Helper function to create menu item HTML
function createMenuItem(item) {
    return `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <span class="menu-item-name">${item.name}</span>
                    <span class="menu-item-price">₹${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-rating">
                    <span class="star">★</span>
                    <span>${item.rating}</span>
                    <span>•</span>
                    <span>${item.reviews} reviews</span>
                </div>
            </div>
        </div>
    `;
}

// Initialize menu items
function initializeMenuItems() {
    const popularItemsContainer = document.getElementById('popularItems');
    const menuItemsContainer = document.getElementById('menuItems');
    
    const popularItems = menuItems.filter(item => item.isPopular);
    
    popularItemsContainer.innerHTML = popularItems.map(createMenuItem).join('');
    menuItemsContainer.innerHTML = menuItems.map(createMenuItem).join('');
}

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginSection.classList.add('hidden');
    mainContent.classList.remove('hidden');
    initializeMenuItems();
});

// Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Show active section
        const targetId = link.getAttribute('href').substring(1);
        sections.forEach(section => {
            section.classList.add('hidden');
            if (section.id === targetId) {
                section.classList.remove('hidden');
            }
        });
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});
