// Admin Login JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initAdminLogin();
    initPasswordToggle();
    checkAuthStatus();
});

// Initialize admin login functionality
function initAdminLogin() {
    const loginForm = document.getElementById('adminLoginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

// Initialize password toggle functionality
function initPasswordToggle() {
    const toggleBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            const icon = toggleBtn.querySelector('i');
            icon.className = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
        });
    }
}

// Handle login form submission
async function handleLogin(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.login-btn');
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Show loading state
    submitBtn.classList.add('loading');
    
    // Remove any existing error messages
    removeMessages();
    
    try {
        // Simple authentication (in a real app, this would be server-side)
        if (username === 'Admin08' && password === 'gabriel348') {
            // Store authentication token
            localStorage.setItem('adminToken', 'authenticated');
            localStorage.setItem('adminLoginTime', Date.now());
            
            showMessage('Login successful! Redirecting...', 'success');
            
            // Redirect to admin dashboard after a short delay
            setTimeout(() => {
                window.location.href = 'admin-dashboard.html';
            }, 1500);
        } else {
            showMessage('Invalid username or password. Please try again.', 'error');
        }
    } catch (error) {
        showMessage('An error occurred during login. Please try again.', 'error');
    } finally {
        submitBtn.classList.remove('loading');
    }
}

// Check if user is already authenticated
function checkAuthStatus() {
    const token = localStorage.getItem('adminToken');
    const loginTime = localStorage.getItem('adminLoginTime');
    
    // Check if token exists and is not expired (24 hours)
    if (token && loginTime) {
        const currentTime = Date.now();
        const timeDiff = currentTime - parseInt(loginTime);
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        
        if (hoursDiff < 24) {
            // User is authenticated, redirect to dashboard
            window.location.href = 'admin-dashboard.html';
        } else {
            // Token expired, clear storage
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminLoginTime');
        }
    }
}

// Show message (success or error)
function showMessage(message, type) {
    const form = document.getElementById('adminLoginForm');
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    
    // Insert message before the form
    form.parentNode.insertBefore(messageDiv, form);
    
    // Auto-remove error messages after 5 seconds
    if (type === 'error') {
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
}

// Remove all messages
function removeMessages() {
    const messages = document.querySelectorAll('.error-message, .success-message');
    messages.forEach(message => message.remove());
}

// Logout function (can be called from dashboard)
function logout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminLoginTime');
    window.location.href = 'admin.html';
}

// Utility function to check if user is authenticated
function isAuthenticated() {
    const token = localStorage.getItem('adminToken');
    const loginTime = localStorage.getItem('adminLoginTime');
    
    if (!token || !loginTime) {
        return false;
    }
    
    const currentTime = Date.now();
    const timeDiff = currentTime - parseInt(loginTime);
    const hoursDiff = timeDiff / (1000 * 60 * 60);
    
    return hoursDiff < 24;
}

// Export functions for use in other files
window.adminUtils = {
    logout,
    isAuthenticated,
    checkAuthStatus
}; 
