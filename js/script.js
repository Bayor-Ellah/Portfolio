// ===== MODERN PORTFOLIO JAVASCRIPT =====

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // ===== SCROLL TO TOP FUNCTIONALITY =====
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide navbar on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Add staggered animation for skill items
                if (entry.target.classList.contains('skills-grid')) {
                    const skillItems = entry.target.querySelectorAll('.skill-item');
                    skillItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }

                // Add staggered animation for project cards
                if (entry.target.classList.contains('projects-grid')) {
                    const projectCards = entry.target.querySelectorAll('.project-card');
                    projectCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                }

                // Add staggered animation for experience items
                if (entry.target.classList.contains('experience-list')) {
                    const experienceItems = entry.target.querySelectorAll('.experience-item');
                    experienceItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, index * 100);
                    });
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // ===== HERO SECTION TYPEWRITER EFFECT =====
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroCTA = document.querySelector('.hero-cta');

    // Initial hero animations
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 300);

    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 600);

    setTimeout(() => {
        heroDescription.style.opacity = '1';
        heroDescription.style.transform = 'translateY(0)';
    }, 900);

    setTimeout(() => {
        heroCTA.style.opacity = '1';
        heroCTA.style.transform = 'translateY(0)';
    }, 1200);

    // ===== CONTACT LINK HOVER EFFECTS =====
    const contactLinks = document.querySelectorAll('.contact-link');

    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== PROJECT CARD HOVER EFFECTS =====
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.project-overlay');
            const link = this.querySelector('.project-link');

            overlay.style.opacity = '1';
            if (link) link.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.project-overlay');
            const link = this.querySelector('.project-link');

            overlay.style.opacity = '0';
            if (link) link.style.transform = 'scale(1)';
        });
    });

    // ===== BUTTON CLICK ANIMATIONS =====
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ===== MOBILE MENU TOGGLE (if needed) =====
    // Add mobile menu functionality if hamburger menu is added later

    // ===== LOADING ANIMATION =====
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');

        // Add loading class styles
        const style = document.createElement('style');
        style.textContent = `
            body:not(.loaded) {
                overflow: hidden;
            }

            body:not(.loaded) .hero-content > * {
                opacity: 0;
                transform: translateY(50px);
            }

            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }

            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }

            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    });

    // ===== PERFORMANCE OPTIMIZATION =====
    // Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(function() {
        // Scroll-dependent functionality here
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // ===== THEME TOGGLE (Optional - for future enhancement) =====
    // Add dark/light theme toggle functionality
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--primary-color);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1001;
        transition: all 0.3s ease;
    `;

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        this.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });

    // Add dark theme styles
    const darkThemeStyles = document.createElement('style');
    darkThemeStyles.textContent = `
        .dark-theme {
            --white: #1a1a1a;
            --gray-50: #2d2d2d;
            --gray-100: #3a3a3a;
            --gray-900: #ffffff;
            --gray-800: #f0f0f0;
            background: var(--gray-50);
            color: var(--gray-900);
        }

        .dark-theme .navbar {
            background: rgba(42, 42, 42, 0.95);
        }

        .dark-theme .hero {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        }
    `;
    document.head.appendChild(darkThemeStyles);

    // Uncomment to add theme toggle button
    // document.body.appendChild(themeToggle);

    console.log('🚀 Modern Portfolio loaded successfully!');
});
