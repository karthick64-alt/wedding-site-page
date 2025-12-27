// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });

    // Close menu when clicking on dropdown items
    const dropdownItems = mainNav.querySelectorAll('.nav-dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });
}

// Dropdown Menu Toggle
const navDropdowns = document.querySelectorAll('.nav-dropdown');

navDropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const menu = dropdown.querySelector('.nav-dropdown-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            navDropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking on a dropdown item
        const dropdownItems = menu.querySelectorAll('.nav-dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                // Update active state
                dropdownItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                // Set parent dropdown as active if this item is active
                if (this.classList.contains('active')) {
                    dropdown.classList.add('active');
                }
                
                // Close mobile menu if on mobile
                if (window.innerWidth <= 968 && menuToggle && mainNav) {
                    menuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                }
            });
        });
    }
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideDropdown = event.target.closest('.nav-dropdown');
    
    navDropdowns.forEach(dropdown => {
        if (!isClickInsideDropdown || !dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});

// Set active dropdown based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navDropdowns.forEach(dropdown => {
    const dropdownItems = dropdown.querySelectorAll('.nav-dropdown-item');
    let hasActiveItem = false;
    
    dropdownItems.forEach(item => {
        const href = item.getAttribute('href');
        // Check if current page matches the href
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === 'index2.html' && href === 'index2.html') ||
            (currentPage === 'login.html' && href === 'login.html') ||
            (currentPage === 'register.html' && href === 'register.html') ||
            (currentPage === 'admin-dashboard.html' && href === 'admin-dashboard.html')) {
            item.classList.add('active');
            hasActiveItem = true;
        } else {
            item.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Login form handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Basic validation
        if (!email || !password) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Here you would typically send the data to your backend
        // For now, we'll just show a success message
        alert('Login successful! Welcome back.');
        // Redirect to home page or dashboard
        // window.location.href = 'index.html';
    });
}

// Register form handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const firstname = document.getElementById('register-firstname').value;
        const lastname = document.getElementById('register-lastname').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm').value;
        const terms = document.querySelector('input[name="terms"]').checked;
        
        // Basic validation
        if (!firstname || !lastname || !email || !password || !confirmPassword) {
            alert('Please fill in all required fields.');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }
        
        if (!terms) {
            alert('Please agree to the Terms & Conditions and Privacy Policy.');
            return;
        }
        
        // Here you would typically send the data to your backend
        // For now, we'll just show a success message
        alert('Account created successfully! Welcome to Belle Weddings.');
        // Redirect to login page
        window.location.href = 'login.html';
    });
}

// Active navigation link highlighting
const currentPageNav = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPageNav || (currentPageNav === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Chat icon click handler
const chatIcon = document.querySelector('.chat-icon');
if (chatIcon) {
    chatIcon.addEventListener('click', function() {
        alert('Chat feature coming soon! Please use the contact form or call us.');
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe content sections
document.querySelectorAll('.content-section, .service-item, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

