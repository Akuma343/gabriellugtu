// Portfolio JavaScript - Enhanced Motion Design Version

document.addEventListener('DOMContentLoaded', function() {
    // Make all scroll-animated elements visible on load for layout
    document.querySelectorAll('.scroll-fade-in, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in, .scroll-rotate-in, .section-animate, .section-animate-left, .section-animate-right, .section-animate-scale, .skill-card, .section-title, .contact-item').forEach(el => {
        el.classList.add('visible');
    });
    // Initialize all functionality
    initSmoothScroll();
    initScrollAnimations();
    initSkillsBackgroundIcon();
    initEnhancedScrollAnimations();
    initAOSObserver();
    initSectionVisibility();
    initScrollProgressBar();
    initMotionEffects();
    initContactForm();
    initMobileNavigation();
    
    // Add loaded class to body
    document.body.classList.add('loaded');
});

// Enhanced Intersection Observer for scroll animations
function initEnhancedScrollAnimations() {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with animation classes
    document.querySelectorAll('.scroll-fade-in, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in, .scroll-rotate-in, .section-animate, .section-animate-left, .section-animate-right, .section-animate-scale').forEach((element) => {
        scrollObserver.observe(element);
    });
}

// AOS observer for data-aos attributes
function initAOSObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach((element) => {
        observer.observe(element);
    });
}

// Enhanced section visibility detection
function initSectionVisibility() {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
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
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-card, .section-title, .contact-item, .scroll-fade-in, .scroll-fade-in-left, .scroll-fade-in-right, .scroll-scale-in').forEach(element => {
        observer.observe(element);
    });
}

// Skills background icon functionality
function initSkillsBackgroundIcon() {
    const skillCards = document.querySelectorAll('.skill-card');
    const skillsSection = document.getElementById('skills');
    const bgIcon = document.getElementById('skills-bg-icon');

    if (skillCards.length && skillsSection && bgIcon) {
        const iconMap = {
            'HTML5': '<i class="fab fa-html5"></i>',
            'CSS3': '<i class="fab fa-css3-alt"></i>',
            'JavaScript': '<i class="fab fa-js"></i>',
            'React': '<i class="fab fa-react"></i>',
            'SASS/SCSS': '<i class="fab fa-sass"></i>',
            'Bootstrap': '<i class="fab fa-bootstrap"></i>',
        };

        skillCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const tech = card.querySelector('h3').textContent.trim();
                if (iconMap[tech]) {
                    bgIcon.innerHTML = iconMap[tech];
                    skillsSection.classList.add('show-bg-icon');
                }
            });
            
            card.addEventListener('mouseleave', () => {
                skillsSection.classList.remove('show-bg-icon');
                bgIcon.innerHTML = '<i class="fas fa-code"></i>';
            });
        });
    }
}

// Scroll progress bar
function initScrollProgressBar() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
        });
    }
}

// Enhanced motion effects
function initMotionEffects() {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add parallax effect to background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body::before');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Enhanced click effects with ripple animation
    document.addEventListener('click', (e) => {
        createClickEffect(e.clientX, e.clientY);
    });
    
    // Mouse tracking effects for interactive elements
    initMouseTracking();
    
    // Dynamic element animations
    initDynamicAnimations();
    
    // Enhanced hover effects
    initEnhancedHoverEffects();
    
    function createClickEffect(x, y) {
        const effect = document.createElement('div');
        effect.style.position = 'fixed';
        effect.style.left = x + 'px';
        effect.style.top = y + 'px';
        effect.style.width = '0px';
        effect.style.height = '0px';
        effect.style.borderRadius = '50%';
        effect.style.background = 'radial-gradient(circle, rgba(147, 59, 213, 0.8), rgba(0, 180, 255, 0.6), transparent)';
        effect.style.pointerEvents = 'none';
        effect.style.zIndex = '9999';
        effect.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        effect.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(effect);
        
        // Animate effect
        setTimeout(() => {
            effect.style.width = '300px';
            effect.style.height = '300px';
            effect.style.opacity = '0';
            effect.style.transform = 'translate(-50%, -50%) scale(2)';
        }, 10);
        
        // Remove effect after animation
        setTimeout(() => {
            document.body.removeChild(effect);
        }, 800);
    }
}

// Mouse tracking effects
function initMouseTracking() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(147, 59, 213, 0.8), rgba(0, 180, 255, 0.6));
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: all 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor following
    function updateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(updateCursor);
    }
    updateCursor();
    
    // Cursor effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .contact-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'radial-gradient(circle, rgba(0, 180, 255, 0.9), rgba(147, 59, 213, 0.7))';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(147, 59, 213, 0.8), rgba(0, 180, 255, 0.6))';
        });
    });
}

// Dynamic element animations
function initDynamicAnimations() {
    // Floating particles effect
    createFloatingParticles();
    
    // Dynamic skill progress animation
    initSkillProgressAnimation();
    
    // Text typing effect for titles
    initTypingEffect();
    
    function createFloatingParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle, rgba(147, 59, 213, 0.6), transparent);
                border-radius: 50%;
                animation: float-particle ${5 + Math.random() * 10}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            particlesContainer.appendChild(particle);
        }
        
        // Add CSS animation for particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-particle {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    function initSkillProgressAnimation() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    if (progressBar) {
                        const width = progressBar.style.getPropertyValue('--progress-width');
                        progressBar.style.width = '0%';
                        setTimeout(() => {
                            progressBar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
                            progressBar.style.width = width;
                        }, 500);
                    }
                }
            });
        }, { threshold: 0.5 });
        
        skillCards.forEach(card => progressObserver.observe(card));
    }
    
    function initTypingEffect() {
        const titles = document.querySelectorAll('.section-title');
        
        titles.forEach(title => {
            const text = title.textContent;
            title.textContent = '';
            title.style.borderRight = '2px solid var(--neon-blue)';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    title.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    title.style.borderRight = 'none';
                }
            };
            
            const titleObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        typeWriter();
                        titleObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            titleObserver.observe(title);
        });
    }
}

// Enhanced hover effects
function initEnhancedHoverEffects() {
    // 3D tilt effect for cards
    const cards = document.querySelectorAll('.skill-card, .project-card, .contact-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
    
    // Magnetic effect for buttons
    const buttons = document.querySelectorAll('.submit-btn, .nav-link, .social-icon');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
}

// Initialize when window is loaded
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add entrance animations
    setTimeout(() => {
        document.querySelectorAll('.hero-text, .profile-container').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 500);
});

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual backend integration)
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Save message to localStorage for admin dashboard
            saveMessageToStorage(name, email, subject, message);
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Save message to localStorage
function saveMessageToStorage(name, email, subject, message) {
    try {
        // Get existing messages
        const existingMessages = localStorage.getItem('contactMessages');
        const messages = existingMessages ? JSON.parse(existingMessages) : [];
        
        // Create new message object
        const newMessage = {
            id: Date.now(), // Use timestamp as unique ID
            name: name,
            email: email,
            subject: subject,
            message: message,
            date: new Date().toISOString(),
            read: false
        };
        
        // Add new message to beginning of array
        messages.unshift(newMessage);
        
        // Save back to localStorage
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        
        console.log('Message saved to storage:', newMessage);
    } catch (error) {
        console.error('Error saving message to storage:', error);
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
        border: 1px solid ${type === 'success' ? '#00ff00' : '#ff0000'};
        border-radius: 8px;
        padding: 1rem;
        color: white;
        backdrop-filter: blur(10px);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Mobile navigation functionality
function initMobileNavigation() {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    if (mobileToggle && navLinks) {
        // Toggle mobile menu
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on a link
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu on window resize (if screen becomes larger)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 767) {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Prevent body scroll when mobile menu is open
        navLinks.addEventListener('transitionend', function() {
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
} 