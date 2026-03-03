// ============================================
// LIVE CLOCK
// ============================================
function updateClock() {
    const now = new Date();

    // Time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;

    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);

    // Footer year
    document.getElementById('footer-year').textContent = now.getFullYear();
}

updateClock();
setInterval(updateClock, 1000);

// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.about-card, .stat-item, .contact-container, .about-header');

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavScroll() {
    const nav = document.getElementById('main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.padding = '0.8rem 2rem';
            nav.style.background = 'rgba(14, 14, 14, 0.95)';
        } else {
            nav.style.padding = '1.2rem 2rem';
            nav.style.background = 'rgba(14, 14, 14, 0.8)';
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================
// PARALLAX SUBTLE EFFECT ON HERO
// ============================================
function initParallax() {
    const hero = document.getElementById('hero');
    const imageWrapper = document.querySelector('.hero-image-wrapper');
    const stars = document.querySelectorAll('.star');

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        if (imageWrapper) {
            imageWrapper.style.transform = `translateY(${-15 + y * -10}px) rotate(${2 + x * 3}deg)`;
        }

        stars.forEach((star, i) => {
            const factor = (i + 1) * 8;
            star.style.transform = `translate(${x * factor}px, ${y * factor}px) rotate(${x * 60}deg)`;
        });
    });
}

// ============================================
// TICKER DUPLICATION (for seamless loop)
// ============================================
function initTicker() {
    const track = document.querySelector('.ticker-track');
    const content = document.querySelector('.ticker-content');
    if (track && content) {
        const clone = content.cloneNode(true);
        track.appendChild(clone);
    }
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initNavScroll();
    initSmoothScroll();
    initParallax();
    initTicker();
});
