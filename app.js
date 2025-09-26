// DOM Elements
const pageLoader = document.getElementById('pageLoader');
const mainContent = document.getElementById('mainContent');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const downloadResumeBtn = document.querySelector('.download-resume-btn');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Theme Management
function initTheme() {
    // Check for saved theme preference or default to 'light' mode
    const savedTheme = localStorage.getItem('color-scheme') || 'light';
    applyTheme(savedTheme);
    
    // Add click event listener to theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-color-scheme', theme);
    
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
    
    // Add rotation animation
    if (themeToggle) {
        themeToggle.classList.add('rotating');
        setTimeout(() => {
            themeToggle.classList.remove('rotating');
        }, 300);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Save to localStorage
    localStorage.setItem('color-scheme', newTheme);
    
    // Apply the theme
    applyTheme(newTheme);
    
    // Show notification
    showNotification(`Switched to ${newTheme} mode`, 'info');
}

// Page Loader Animation - Updated for "AK" instead of "AKB"
function initPageLoader() {
    // Ensure main content starts with loading class
    mainContent.classList.add('loading');
    
    // After 2.5 seconds, fade out loader and fade in main content
    setTimeout(() => {
        pageLoader.classList.add('fade-out');
        mainContent.classList.remove('loading');
        mainContent.classList.add('fade-in');
        
        // Remove loader from DOM after transition completes
        setTimeout(() => {
            if (pageLoader) {
                pageLoader.style.display = 'none';
            }
        }, 500);
    }, 2500);
}

// Navigation functionality
function initNavigation() {
    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navbar && !navbar.contains(e.target)) {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Active navigation link highlighting based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100; // Offset for better UX

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// Navbar background on scroll with theme support
function handleNavbarScroll() {
    if (!navbar) return;
    
    const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
    
    if (window.scrollY > 50) {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(31, 33, 33, 0.98)';
        } else {
            navbar.style.background = 'rgba(252, 252, 249, 0.98)';
        }
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(31, 33, 33, 0.95)';
        } else {
            navbar.style.background = 'rgba(252, 252, 249, 0.95)';
        }
        navbar.style.boxShadow = 'none';
    }
}

// Scroll animations for elements
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add stagger animation for cards
                if (entry.target.classList.contains('experience-card') || 
                    entry.target.classList.contains('project-card') ||
                    entry.target.classList.contains('certification-card')) {
                    entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
                    entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                }
            }
        });
    }, observerOptions);

    // Wait a moment for content to load, then observe elements
    setTimeout(() => {
        const elementsToAnimate = document.querySelectorAll('.card, .skill-category, .section-title');
        elementsToAnimate.forEach(el => {
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s ease-out';
                observer.observe(el);
            }
        });
    }, 3000); // Wait for page loader to complete
}

// Resume download functionality
function initResumeDownload() {
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add loading state
            const originalText = downloadResumeBtn.textContent;
            downloadResumeBtn.textContent = 'Preparing Download...';
            downloadResumeBtn.disabled = true;

            // Simulate download preparation
            setTimeout(() => {
                // Reset button state
                downloadResumeBtn.textContent = originalText;
                downloadResumeBtn.disabled = false;

                // Show notification
                showNotification('Resume download will be available soon!', 'info');
            }, 1000);
        });
    }
}

// Enhanced notification system with theme support
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
    
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        padding: 16px 20px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-base);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        max-width: 320px;
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
        font-family: var(--font-family-base);
    `;
    
    if (type === 'info') {
        notification.style.borderLeftColor = 'var(--color-primary)';
        notification.style.borderLeftWidth = '4px';
    }

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-info-circle" style="color: var(--color-primary);"></i>
            <span style="color: var(--color-text); font-size: 14px;">${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Hero logo hover effect
function initHeroLogoEffect() {
    const heroLogo = document.querySelector('.hero-logo');
    if (heroLogo) {
        heroLogo.addEventListener('mouseenter', () => {
            heroLogo.style.transform = 'scale(1.05) rotate(-2deg)';
        });

        heroLogo.addEventListener('mouseleave', () => {
            heroLogo.style.transform = 'scale(1) rotate(0deg)';
        });

        heroLogo.addEventListener('click', () => {
            // Easter egg - pulse animation
            heroLogo.style.animation = 'pulse 0.6s ease-out';
            setTimeout(() => {
                heroLogo.style.animation = '';
            }, 600);
        });
    }
}

// Typing animation for hero subtitle
function initTypingAnimation() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.borderRight = '2px solid var(--color-primary)';
        
        let index = 0;
        const typeSpeed = 80;

        setTimeout(() => {
            function typeText() {
                if (index < text.length) {
                    subtitle.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeText, typeSpeed);
                } else {
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        subtitle.style.borderRight = 'none';
                    }, 1000);
                }
            }
            typeText();
        }, 3500); // Start after page loader completes
    }
}

// Skill tags hover animation
function initSkillTagAnimations() {
    setTimeout(() => {
        const skillTags = document.querySelectorAll('.skill-tag:not(.learning)');
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                const randomRotation = (Math.random() - 0.5) * 10; // -5 to 5 degrees
                tag.style.transform = `translateY(-2px) rotate(${randomRotation}deg)`;
            });

            tag.addEventListener('mouseleave', () => {
                tag.style.transform = 'translateY(0) rotate(0deg)';
            });
        });
    }, 3000);
}

// Social links hover effects
function initSocialLinksEffects() {
    setTimeout(() => {
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-3px) scale(1.1)';
            });

            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0) scale(1)';
            });
        });
    }, 3000);
}

// Contact items copy to clipboard (updated to exclude phone number)
function initContactCopyFeature() {
    setTimeout(() => {
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            item.title = 'Click to copy';
            
            item.addEventListener('click', () => {
                const textElement = item.querySelector('span');
                if (textElement) {
                    const text = textElement.textContent;
                    
                    // Try to copy to clipboard
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText(text).then(() => {
                            showNotification(`Copied: ${text}`, 'info');
                            addCopyFeedback(item);
                        }).catch(() => {
                            // Fallback for older browsers
                            fallbackCopyText(text);
                            showNotification(`Copied: ${text}`, 'info');
                            addCopyFeedback(item);
                        });
                    } else {
                        // Fallback for older browsers
                        fallbackCopyText(text);
                        showNotification(`Copied: ${text}`, 'info');
                        addCopyFeedback(item);
                    }
                }
            });
        });
    }, 3000);
}

// Fallback copy function for older browsers
function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Fallback copy failed', err);
    }
    
    document.body.removeChild(textArea);
}

// Visual feedback for copy action
function addCopyFeedback(item) {
    const originalBg = item.style.background;
    const originalColor = item.style.color;
    
    item.style.background = 'var(--color-primary)';
    item.style.color = 'var(--color-btn-primary-text)';
    
    setTimeout(() => {
        item.style.background = originalBg;
        item.style.color = originalColor;
    }, 1000);
}

// Add CSS animations
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .notification {
            animation: slideInLeft 0.3s ease-out;
        }

        @keyframes slideInLeft {
            from {
                transform: translateX(100%);
            }
            to {
                transform: translateX(0);
            }
        }

        .theme-toggle.rotating {
            animation: rotateIcon 0.3s ease-out;
        }

        @keyframes rotateIcon {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced scroll event listener with theme support
let scrollTimeout;
function handleScroll() {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        updateActiveNavLink();
        handleNavbarScroll();
    }, 10);
}

// Theme change handler for system theme changes
function handleSystemThemeChange() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addListener((e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('color-scheme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio app initializing...');
    
    // Add dynamic styles first
    addDynamicStyles();
    
    // Initialize theme first (before any visual elements)
    initTheme();
    handleSystemThemeChange();
    
    // Initialize core features immediately
    initPageLoader();
    initNavigation();
    initResumeDownload();
    initHeroLogoEffect();
    
    // Initialize features that depend on content being visible
    setTimeout(() => {
        initScrollAnimations();
        initTypingAnimation();
        initSkillTagAnimations();
        initSocialLinksEffects();
        initContactCopyFeature();
        
        // Set first nav link as active by default
        const firstNavLink = document.querySelector('.nav-link');
        if (firstNavLink) {
            firstNavLink.classList.add('active');
        }
        
        console.log('Portfolio app fully initialized');
    }, 3000);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Add resize event listener for responsive adjustments
    window.addEventListener('resize', () => {
        // Close mobile menu on resize
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
        
        // Re-calculate navbar background on resize
        handleNavbarScroll();
    });

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        }
        
        // Keyboard shortcut for theme toggle (Ctrl/Cmd + Shift + L)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
            e.preventDefault();
            toggleTheme();
        }
    });
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Refresh animations if needed when user returns to tab
        const learningTags = document.querySelectorAll('.skill-tag.learning');
        learningTags.forEach(tag => {
            tag.style.animation = 'pulse 2s infinite';
        });
        
        // Update navbar background based on current theme
        handleNavbarScroll();
    }
});

// Handle theme changes from localStorage in other tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'color-scheme') {
        applyTheme(e.newValue || 'light');
    }
});

// Export functions for potential external use
window.PortfolioApp = {
    showNotification,
    updateActiveNavLink,
    initScrollAnimations,
    toggleTheme,
    applyTheme
};