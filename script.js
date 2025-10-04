// Smooth scrolling for navigation links
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

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    // Add mobile menu functionality here if needed
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-item, .service-card, .case-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Animate counters when they come into view
const statNumbers = document.querySelectorAll('.stat-number');
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.textContent.replace(/\D/g, ''));
            animateCounter(entry.target, target);
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statObserver.observe(stat);
});

// Subtle parallax effect for Grok style
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.bg-shape');
    const lightBeam = document.querySelector('.light-beam');
    
    // Background shapes parallax (very subtle)
    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Light beam parallax
    if (lightBeam) {
        const speed = 0.2;
        lightBeam.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Button hover effects
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Card hover effects
document.querySelectorAll('.feature-item, .service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Space effects
function createSpaceStars() {
    const spaceStars = document.getElementById('spaceStars');
    if (!spaceStars) return;
    
    const starCount = 150;
    const starSizes = ['star-small', 'star-medium', 'star-large'];
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = `star ${starSizes[Math.floor(Math.random() * starSizes.length)]}`;
        star.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        spaceStars.appendChild(star);
    }
}

// Grok-style effects
function initGrokEffects() {
    createSpaceStars();
    console.log('Space effects initialized');
}

// Создание интерактивных частиц
function createInteractiveParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 80;
    const colors = ['#667eea', '#f093fb', '#4facfe', '#00d4ff', '#ffd700'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'interactive-particle';
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            animation: particleFloat ${3 + Math.random() * 8}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            box-shadow: 0 0 ${Math.random() * 10 + 3}px ${color};
            opacity: ${Math.random() * 0.6 + 0.3};
        `;
        hero.appendChild(particle);
    }
}

// Добавление CSS для интерактивных частиц
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.3;
        }
        25% { 
            transform: translateY(-30px) rotate(90deg) scale(1.2);
            opacity: 0.8;
        }
        50% { 
            transform: translateY(-15px) rotate(180deg) scale(0.8);
            opacity: 0.5;
        }
        75% { 
            transform: translateY(-40px) rotate(270deg) scale(1.1);
            opacity: 0.9;
        }
    }
    
    .interactive-particle {
        animation: particleFloat 6s ease-in-out infinite;
    }
    
    .interactive-particle:hover {
        animation-play-state: paused;
        transform: scale(2) !important;
        opacity: 1 !important;
    }
`;
document.head.appendChild(particleStyle);

// Initialize typing effect and Grok effects on load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
    
    // Initialize Grok effects
    initGrokEffects();
});

// Add glow effect to gradient text
document.querySelectorAll('.gradient-text').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 30px rgba(102, 126, 234, 0.8), 0 0 60px rgba(240, 147, 251, 0.4)';
        this.style.transform = 'scale(1.05)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.textShadow = 'none';
        this.style.transform = 'scale(1)';
    });
});

// Добавление эффекта магнитного притяжения для карточек
document.querySelectorAll('.feature-item, .service-card, .case-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Добавление эффекта пульсации для кнопок
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.animation = 'buttonPulse 0.6s ease-in-out infinite alternate';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

// Добавление CSS для пульсации кнопок
const buttonPulseStyle = document.createElement('style');
buttonPulseStyle.textContent = `
    @keyframes buttonPulse {
        0% { 
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.4);
        }
        100% { 
            box-shadow: 0 0 40px rgba(102, 126, 234, 0.8), 0 0 60px rgba(240, 147, 251, 0.4);
        }
    }
`;
document.head.appendChild(buttonPulseStyle);

// Case navigation functionality
const caseNavigation = document.querySelectorAll('.nav-arrow');
caseNavigation.forEach(arrow => {
    arrow.addEventListener('click', function() {
        // Add case switching functionality here
        console.log('Case navigation clicked');
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();