// script.js (Main Application Entry Point)

// Import rendering and setup functions from each component
import { renderNavbar } from './components/navbar/navbar.js';
import { renderHeroSection, setupHeroSectionListeners } from './components/heroSection/hero.js';
import { renderAboutSection, setupAboutSectionListeners, showSpecificContent } from './components/about/about.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Navbar Component
    const navbarContainer = document.getElementById('navbar-container');
if (navbarContainer) {
    navbarContainer.innerHTML = renderNavbar();

    // --- Navbar auto-hide on scroll (letakkan di sini!) ---
    let lastScrollY = window.scrollY;
    const navbar = navbarContainer.querySelector('.navbar');
    let ticking = false;

    function handleNavbar() {
        if (!navbar) return;
        if (window.scrollY > lastScrollY && window.scrollY > 40) {
            navbar.classList.remove('show');
            navbar.classList.add('hide');
        } else {
            navbar.classList.remove('hide');
            navbar.classList.add('show');
        }
        lastScrollY = window.scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(handleNavbar);
            ticking = true;
        }
    });

    // Inisialisasi supaya navbar langsung muncul
    if (navbar) navbar.classList.add('show');
}

    // 2. Inject Hero Section Component
    const heroSectionContainer = document.getElementById('hero-section-container');
    if (heroSectionContainer) {
        heroSectionContainer.classList.add('hero-section'); // Add the class for styling
        heroSectionContainer.innerHTML = renderHeroSection();
        setupHeroSectionListeners(); // Setup listeners for copy button, etc.
    }

    // 3. Inject About Section Component (which includes all expandable content)
    const aboutSectionContainer = document.getElementById('about-section-container');
    if (aboutSectionContainer) {
        aboutSectionContainer.innerHTML = renderAboutSection();
        setupAboutSectionListeners(); // Setup listeners for terminal buttons and chat
        
        // IMPORTANT: Initialize to show 'howtobuy' content when the page loads
        // This ensures the first content is visible and the container calculates its height.
        showSpecificContent('howtobuy'); 
    }
});