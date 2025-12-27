// Admin Dashboard JavaScript

// Sidebar Toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const adminSidebar = document.getElementById('adminSidebar');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
        adminSidebar.classList.toggle('active');
    });
}

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        adminSidebar.classList.toggle('active');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 968) {
        const isClickInsideSidebar = adminSidebar.contains(event.target);
        const isClickOnToggle = (mobileMenuToggle && mobileMenuToggle.contains(event.target)) || 
                                (sidebarToggle && sidebarToggle.contains(event.target));
        
        if (!isClickInsideSidebar && !isClickOnToggle && adminSidebar.classList.contains('active')) {
            adminSidebar.classList.remove('active');
        }
    }
});

// Navigation Section Switching
const navItems = document.querySelectorAll('.nav-item[data-section]');
const dashboardSections = document.querySelectorAll('.dashboard-section');
const pageTitle = document.getElementById('pageTitle');

// Section titles mapping
const sectionTitles = {
    'dashboard': 'Dashboard',
    'events': 'Events',
    'clients': 'Clients',
    'calendar': 'Calendar',
    'revenue': 'Revenue',
    'vendors': 'Vendors',
    'tasks': 'Tasks',
    'messages': 'Messages',
    'settings': 'Settings'
};

navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Get section name
        const sectionName = this.getAttribute('data-section');
        
        // Hide all sections
        dashboardSections.forEach(section => section.classList.remove('active'));
        
        // Show selected section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Update page title
        if (pageTitle && sectionTitles[sectionName]) {
            pageTitle.textContent = sectionTitles[sectionName];
        }
        
        // Close sidebar on mobile after selection
        if (window.innerWidth <= 968) {
            adminSidebar.classList.remove('active');
        }
    });
});

// Task Checkbox Handler
const taskCheckboxes = document.querySelectorAll('.task-checkbox');
taskCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const taskItem = this.closest('.task-item, .task-item-full');
        if (this.checked) {
            taskItem.style.opacity = '0.6';
            taskItem.style.textDecoration = 'line-through';
        } else {
            taskItem.style.opacity = '1';
            taskItem.style.textDecoration = 'none';
        }
    });
});

// Filter Buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Here you would filter tasks based on the selected filter
        // For now, just update the UI
    });
});

// Settings Navigation
const settingsNavItems = document.querySelectorAll('.settings-nav-item[data-settings]');
const settingsPanels = document.querySelectorAll('.settings-panel');

settingsNavItems.forEach(item => {
    item.addEventListener('click', function() {
        settingsNavItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        const panelName = this.getAttribute('data-settings');
        
        settingsPanels.forEach(panel => panel.classList.remove('active'));
        const targetPanel = document.getElementById(panelName);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

// Message Item Click Handler
const messageItems = document.querySelectorAll('.message-item');
messageItems.forEach(item => {
    item.addEventListener('click', function() {
        messageItems.forEach(msg => msg.classList.remove('active'));
        this.classList.add('active');
        
        // Remove unread badge
        const unreadBadge = this.querySelector('.message-unread');
        if (unreadBadge) {
            unreadBadge.remove();
        }
    });
});

// Message Send Handler
const messageInput = document.querySelector('.message-input');
const messageSendBtn = document.querySelector('.message-input-area .btn-primary');

if (messageSendBtn && messageInput) {
    messageSendBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const message = messageInput.value.trim();
        
        if (message) {
            // Create new message bubble
            const messageThread = document.querySelector('.message-thread');
            if (messageThread) {
                const newMessage = document.createElement('div');
                newMessage.className = 'message-bubble sent';
                newMessage.innerHTML = `
                    <p>${message}</p>
                    <span class="message-time-small">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                `;
                messageThread.appendChild(newMessage);
                messageThread.scrollTop = messageThread.scrollHeight;
            }
            
            messageInput.value = '';
        }
    });
    
    // Send on Enter key
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            messageSendBtn.click();
        }
    });
}

// Calendar Navigation
const calendarPrevBtn = document.querySelector('.calendar-controls .btn-icon:first-of-type');
const calendarNextBtn = document.querySelector('.calendar-controls .btn-icon:last-of-type');
const currentMonthEl = document.querySelector('.current-month');

if (calendarPrevBtn && calendarNextBtn && currentMonthEl) {
    let currentDate = new Date();
    
    function updateCalendar() {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        currentMonthEl.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    }
    
    calendarPrevBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
        // Here you would regenerate the calendar grid
    });
    
    calendarNextBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
        // Here you would regenerate the calendar grid
    });
    
    updateCalendar();
}

// Quick Action Buttons
const actionButtons = document.querySelectorAll('.action-btn');
actionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const actionText = this.querySelector('span').textContent;
        alert(`${actionText} feature - This would open a modal or navigate to a form.`);
    });
});

// Table Row Actions
const tableActionButtons = document.querySelectorAll('.data-table .btn-icon');
tableActionButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const action = this.getAttribute('title');
        const row = this.closest('tr');
        const eventName = row.querySelector('td:first-child').textContent;
        
        if (action === 'Delete') {
            if (confirm(`Are you sure you want to delete "${eventName}"?`)) {
                row.style.opacity = '0.5';
                // Here you would actually delete the item
                setTimeout(() => {
                    row.remove();
                }, 300);
            }
        } else if (action === 'Edit') {
            alert(`Edit "${eventName}" - This would open an edit form.`);
        } else if (action === 'View') {
            alert(`View "${eventName}" - This would show details.`);
        }
    });
});

// Client Card Actions
const clientActionButtons = document.querySelectorAll('.client-card .btn-small');
clientActionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const clientCard = this.closest('.client-card');
        const clientName = clientCard.querySelector('.client-name').textContent;
        const action = this.textContent.trim();
        
        if (action === 'View Details') {
            alert(`View details for ${clientName}`);
        } else if (action === 'Message') {
            // Switch to messages section
            const messagesNav = document.querySelector('.nav-item[data-section="messages"]');
            if (messagesNav) {
                messagesNav.click();
            }
        }
    });
});

// Vendor Card Actions
const vendorActionButtons = document.querySelectorAll('.vendor-card .btn-small');
vendorActionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const vendorCard = this.closest('.vendor-card');
        const vendorName = vendorCard.querySelector('.vendor-name').textContent;
        alert(`View details for ${vendorName}`);
    });
});

// Notification Button
const notificationBtn = document.querySelector('.notification-btn');
if (notificationBtn) {
    notificationBtn.addEventListener('click', function() {
        alert('Notifications - This would show a dropdown with notifications.');
    });
}

// Search Functionality
const searchInput = document.querySelector('.search-box input');
if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value.trim();
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
                // Here you would implement actual search functionality
            }
        }
    });
}

// Period Select Change Handler
const periodSelects = document.querySelectorAll('.period-select');
periodSelects.forEach(select => {
    select.addEventListener('change', function() {
        const period = this.value;
        console.log(`Period changed to: ${period}`);
        // Here you would update charts/data based on selected period
    });
});

// Initialize Chart (Simple placeholder - in production, use Chart.js or similar)
function initRevenueChart() {
    const canvas = document.getElementById('revenueChart');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width = canvas.offsetWidth;
        const height = canvas.height = 250;
        
        // Simple bar chart representation
        ctx.fillStyle = '#F5F1EB';
        ctx.fillRect(0, 0, width, height);
        
        // Draw sample bars
        const data = [45, 60, 55, 70, 65, 80, 75];
        const barWidth = width / data.length - 10;
        const maxValue = Math.max(...data);
        
        data.forEach((value, index) => {
            const barHeight = (value / maxValue) * (height - 40);
            const x = (index * (width / data.length)) + 5;
            const y = height - barHeight - 20;
            
            ctx.fillStyle = '#C9A882';
            ctx.fillRect(x, y, barWidth, barHeight);
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initRevenueChart();
    
    // Set active section based on hash or default to dashboard
    const hash = window.location.hash.substring(1);
    if (hash) {
        const navItem = document.querySelector(`.nav-item[data-section="${hash}"]`);
        if (navItem) {
            navItem.click();
        }
    }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Close sidebar on mobile when resizing to desktop
        if (window.innerWidth > 968 && adminSidebar) {
            adminSidebar.classList.remove('active');
        }
    }, 250);
});



