// Admin Dashboard JavaScript

let messages = [];
let currentMessageId = null;

document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    loadMessages();
    initEventListeners();
});

// Check authentication
function checkAuth() {
    const token = localStorage.getItem('adminToken');
    const loginTime = localStorage.getItem('adminLoginTime');
    
    if (!token || !loginTime) {
        window.location.href = 'admin.html';
        return;
    }
    
    const currentTime = Date.now();
    const timeDiff = currentTime - parseInt(loginTime);
    const hoursDiff = timeDiff / (1000 * 60 * 60);
    
    if (hoursDiff >= 24) {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminLoginTime');
        window.location.href = 'admin.html';
    }
}

// Initialize event listeners
function initEventListeners() {
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const messageModal = document.getElementById('messageModal');
        const replyModal = document.getElementById('replyModal');
        
        if (event.target === messageModal) {
            closeModal();
        }
        if (event.target === replyModal) {
            closeReplyModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
            closeReplyModal();
        }
    });
}

// Load messages from localStorage
function loadMessages() {
    showLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
        const storedMessages = localStorage.getItem('contactMessages');
        messages = storedMessages ? JSON.parse(storedMessages) : [];
        
        // Add some sample messages if none exist
        if (messages.length === 0) {
            messages = getSampleMessages();
            localStorage.setItem('contactMessages', JSON.stringify(messages));
        }
        
        updateStats();
        displayMessages(messages);
        showLoading(false);
    }, 1000);
}


// Update statistics
function updateStats() {
    const totalMessages = messages.length;
    const unreadMessages = messages.filter(msg => !msg.read).length;
    const todayMessages = messages.filter(msg => {
        const messageDate = new Date(msg.date);
        const today = new Date();
        return messageDate.toDateString() === today.toDateString();
    }).length;
    
    document.getElementById('totalMessages').textContent = totalMessages;
    document.getElementById('unreadMessages').textContent = unreadMessages;
    document.getElementById('todayMessages').textContent = todayMessages;
}

// Display messages
function displayMessages(messagesToShow) {
    const messagesList = document.getElementById('messagesList');
    const emptyState = document.getElementById('emptyState');
    
    if (messagesToShow.length === 0) {
        messagesList.innerHTML = '';
        emptyState.style.display = 'flex';
        return;
    }
    
    emptyState.style.display = 'none';
    
    messagesList.innerHTML = messagesToShow.map(message => `
        <div class="message-item ${message.read ? 'read' : 'unread'}" onclick="openMessage(${message.id})">
            <div class="message-header">
                <div class="message-info">
                    <h4>${message.subject}</h4>
                    <div class="message-meta">
                        <span><i class="fas fa-user"></i> ${message.name}</span>
                        <span><i class="fas fa-envelope"></i> ${message.email}</span>
                        <span><i class="fas fa-clock"></i> ${formatDate(message.date)}</span>
                    </div>
                </div>
                <div class="message-status">
                    <div class="status-indicator"></div>
                    <span>${message.read ? 'Read' : 'Unread'}</span>
                </div>
            </div>
            <div class="message-preview">${message.message.substring(0, 150)}${message.message.length > 150 ? '...' : ''}</div>
        </div>
    `).join('');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
        return 'Just now';
    } else if (diffInHours < 24) {
        return `${Math.floor(diffInHours)} hours ago`;
    } else if (diffInHours < 48) {
        return 'Yesterday';
    } else {
        return date.toLocaleDateString();
    }
}

// Filter messages
function filterMessages() {
    const statusFilter = document.getElementById('statusFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    let filteredMessages = messages;
    
    // Filter by status
    if (statusFilter === 'unread') {
        filteredMessages = filteredMessages.filter(msg => !msg.read);
    } else if (statusFilter === 'read') {
        filteredMessages = filteredMessages.filter(msg => msg.read);
    }
    
    // Filter by search
    if (searchInput) {
        filteredMessages = filteredMessages.filter(msg => 
            msg.name.toLowerCase().includes(searchInput) ||
            msg.email.toLowerCase().includes(searchInput) ||
            msg.subject.toLowerCase().includes(searchInput) ||
            msg.message.toLowerCase().includes(searchInput)
        );
    }
    
    displayMessages(filteredMessages);
}

// Open message modal
function openMessage(messageId) {
    const message = messages.find(msg => msg.id === messageId);
    if (!message) return;
    
    currentMessageId = messageId;
    
    // Mark as read
    if (!message.read) {
        message.read = true;
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        updateStats();
    }
    
    // Populate modal
    document.getElementById('modalTitle').textContent = message.subject;
    document.getElementById('modalFrom').textContent = message.name;
    document.getElementById('modalEmail').textContent = message.email;
    document.getElementById('modalSubject').textContent = message.subject;
    document.getElementById('modalDate').textContent = formatDate(message.date);
    document.getElementById('modalMessage').textContent = message.message;
    
    // Show modal
    document.getElementById('messageModal').style.display = 'block';
    
    // Refresh message list to show updated read status
    displayMessages(messages);
}

// Close message modal
function closeModal() {
    document.getElementById('messageModal').style.display = 'none';
    currentMessageId = null;
}

// Reply to message
function replyToMessage() {
    if (!currentMessageId) return;
    
    const message = messages.find(msg => msg.id === currentMessageId);
    if (!message) return;
    
    // Populate reply form
    document.getElementById('replyTo').value = message.email;
    document.getElementById('replySubject').value = `Re: ${message.subject}`;
    document.getElementById('replyMessage').value = '';
    
    // Close message modal and open reply modal
    closeModal();
    document.getElementById('replyModal').style.display = 'block';
}

// Close reply modal
function closeReplyModal() {
    document.getElementById('replyModal').style.display = 'none';
}

// Send reply
function sendReply() {
    const to = document.getElementById('replyTo').value;
    const subject = document.getElementById('replySubject').value;
    const message = document.getElementById('replyMessage').value;
    
    if (!subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real application, this would send an email
    // For now, we'll just show a success message
    alert(`Reply sent to ${to}`);
    closeReplyModal();
}

// Delete message
function deleteMessage() {
    if (!currentMessageId) return;
    
    if (confirm('Are you sure you want to delete this message?')) {
        messages = messages.filter(msg => msg.id !== currentMessageId);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        
        updateStats();
        displayMessages(messages);
        closeModal();
        
        showNotification('Message deleted successfully', 'success');
    }
}

// Mark all messages as read
function markAllAsRead() {
    messages.forEach(msg => msg.read = true);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    updateStats();
    displayMessages(messages);
    
    showNotification('All messages marked as read', 'success');
}

// Show loading state
function showLoading(show) {
    const loadingState = document.getElementById('loadingState');
    const messagesList = document.getElementById('messagesList');
    const emptyState = document.getElementById('emptyState');
    
    if (show) {
        loadingState.style.display = 'flex';
        messagesList.innerHTML = '';
        emptyState.style.display = 'none';
    } else {
        loadingState.style.display = 'none';
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '8px';
    notification.style.color = 'white';
    notification.style.fontWeight = '600';
    notification.style.zIndex = '10001';
    notification.style.animation = 'slideIn 0.3s ease-out';
    
    if (type === 'success') {
        notification.style.background = 'var(--success-color)';
    } else if (type === 'error') {
        notification.style.background = 'var(--danger-color)';
    } else {
        notification.style.background = 'var(--neon-blue)';
    }
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Logout function
function logout() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminLoginTime');
    window.location.href = 'admin.html';
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 
