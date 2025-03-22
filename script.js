// Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ['#4DA8DA', '#A855F7'] },
        shape: { type: 'circle' },
        opacity: { value: 0.6, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#4DA8DA', opacity: 0.3, width: 1 },
        move: { enable: true, speed: 3, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { 
            onhover: { enable: true, mode: 'repulse' }, 
            onclick: { enable: true, mode: 'push' },
            resize: true 
        },
        modes: { 
            repulse: { distance: 100, duration: 0.4 }, 
            push: { particles_nb: 5 }
        }
    },
    retina_detect: true
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.querySelectorAll('.skill-card').forEach(card => {
        card.style.transform = `translateY(${scrollPosition * 0.05}px)`;
    });
});

// Intersection Observer para animações
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-card, .project-card, .timeline-content, .certification-card').forEach(el => observer.observe(el));