// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');

    // Function to set the icons based on theme
    const setThemeIcons = (isDark) => {
        themeToggleDarkIcon.classList.toggle('hidden', !isDark);
        themeToggleLightIcon.classList.toggle('hidden', isDark);
    };
    
    // Check for saved theme preference or default to light
    const theme = localStorage.getItem('theme');
    const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Set initial icon state
    setThemeIcons(isDark);

    // Toggle theme
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        setThemeIcons(isDark);
    });

    // Mobile menu toggle
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Clear form
            contactForm.reset();
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});