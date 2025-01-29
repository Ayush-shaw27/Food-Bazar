// Menu Items Data
const menuItems = [
    // Starters
    { id: 1, category: "Starters", name: "Paneer Tikka", description: "Grilled cottage cheese marinated in spiced yogurt", price: 249, image: "/images/panner tikka.png", rating: 4.6, reviews: 180, isPopular: true },
    { id: 2, category: "Starters", name: "Samosa", description: "Crispy pastry filled with spiced potatoes and peas", price: 99, image: "/project/images/samosa.png", rating: 4.7, reviews: 220, isPopular: true },
    { id: 3, category: "Starters", name: "Pav Bhaji", description: "Spicy mashed vegetables served with buttered bread", price: 199, image: "/project/images/pav bhaji.png", rating: 4.8, reviews: 250 },
    { id: 4, category: "Starters", name: "Pani Puri", description: "Crispy puris filled with spicy tangy water", price: 149, image: "/project/images/pani puri.png", rating: 4.9, reviews: 280 },

    // Main Course
    { id: 5, category: "Main Course", name: "Butter Chicken", description: "Tender chicken in rich tomato-based curry with butter and cream", price: 299, image: "/project/images/butter chicken.png", rating: 4.8, reviews: 245, isPopular: true },
    { id: 6, category: "Main Course", name: "Chole Bhature", description: "Spicy chickpea curry served with deep-fried bread", price: 199, image: "/project/images/Chole bhature.png", rating: 4.7, reviews: 180 },

    // Tandoori
    { id: 7, category: "Tandoori", name: "Tandoori Chicken", description: "Char-grilled chicken marinated with yogurt and spices", price: 349, image: "/project/images/Tandoori chicken.png", rating: 4.9, reviews: 320, isPopular: true },
    { id: 8, category: "Tandoori", name: "Garlic Naan", description: "Leavened flour bread infused with garlic butter", price: 99, image: "/project/images/naan.png", rating: 4.6, reviews: 150 },

    // Biryani
    { id: 9, category: "Biryani", name: "Chicken Biryani", description: "Fragrant basmati rice with aromatic spices and tender chicken", price: 349, image: "/project/images/chicken briyani.png", rating: 4.9, reviews: 320 },
    { id: 10, category: "Biryani", name: "Veg Biryani", description: "Spiced rice cooked with fresh vegetables and herbs", price: 299, image: "/project/images/briyani.png", rating: 4.8, reviews: 200 },

    // Beverages
    { id: 11, category: "Beverages", name: "Cold Coco", description: "Chilled coconut drink for refreshment", price: 99, image: "/project/images/cold coco.png", rating: 4.5, reviews: 150, isPopular: true },
    { id: 12, category: "Beverages", name: "Masala Chai", description: "Indian spiced tea with cinnamon and cardamom", price: 99, image: "/project/images/masala chai.png", rating: 4.8, reviews: 150 },
    { id: 13, category: "Beverages", name: "Mango Lassi", description: "Sweet mango yogurt drink with saffron and cardamom", price: 149, image: "/project/images/mango lassi.png", rating: 4.9, reviews: 210 },

    // Juices
    { id: 14, category: "Juices", name: "Fresh Orange Juice", description: "Freshly squeezed orange juice with no added sugar", price: 129, image: "/project/images/orange juice.png", rating: 4.7, reviews: 140 },
    { id: 15, category: "Juices", name: "Sugarcane Juice", description: "Refreshing and naturally sweet sugarcane juice", price: 119, image: "/project/images/sugarcane juice.png", rating: 4.8, reviews: 170 },

    // Desserts
    { id: 16, category: "Desserts", name: "Gulab Jamun", description: "Deep-fried milk solids soaked in sugar syrup", price: 99, image: "/project/images/gulab jamun.png", rating: 4.5, reviews: 198 },
    { id: 17, category: "Desserts", name: "Rasmalai", description: "Soft cheese dumplings soaked in saffron-flavored milk", price: 129, image: "/project/images/rasmalai.png", rating: 4.8, reviews: 220 }
];

// DOM Elements
const loginSection = document.getElementById('loginSection');
const mainContent = document.getElementById('mainContent');
const loginForm = document.getElementById('loginForm');
const menuContainer = document.getElementById('menuItems');

// Helper function to create menu item HTML
function createMenuItem(item) {
    return `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" class="menu-image">
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

// Function to categorize and render menu
function initializeMenuItems() {
    const categories = [...new Set(menuItems.map(item => item.category))]; // Get unique categories
    const menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = ""; // Clear previous content

    categories.forEach(category => {
        const categoryHeader = `<h2 class="menu-category">${category}</h2>`;
        
        // Create a wrapper for each category's items
        const categoryWrapper = document.createElement('div');
        categoryWrapper.classList.add('menu-category-container');

        // Get menu items for this category and add to the container
        const items = menuItems.filter(item => item.category === category)
                               .map(createMenuItem).join('');
        categoryWrapper.innerHTML = items;

        // Append the category header and the scrollable items
        menuContainer.innerHTML += categoryHeader;
        menuContainer.appendChild(categoryWrapper);
    });

    addImageHoverEffect();  // Optional: Add hover effect to images if needed
}

function initializePopularItems() {
    const popularItems = menuItems.filter(item => item.isPopular);
    const popularItemsContainer = document.getElementById('popularItems');
    
    // Render popular items as a horizontal scrollable section
    popularItemsContainer.innerHTML = popularItems.map(createMenuItem).join('');
}



// Smooth Image Hover Effect
function addImageHoverEffect() {
    const images = document.querySelectorAll('.menu-image');
    images.forEach(image => {
        image.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.1)";
            image.style.transition = "transform 0.3s ease-in-out";
        });
        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });
    });
}

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginSection.classList.add('hidden');
    mainContent.classList.remove('hidden');
    initializeMenuItems();
    initializePopularItems();
});


// Navigation handling
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
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
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}
