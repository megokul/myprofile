// Dark Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const toggleBall = document.querySelector('.toggle-ball');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
    localStorage.setItem('theme', theme);
    body.className = theme;
}

// Event listener for theme toggle
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        setTheme('');
        toggleBall.style.transform = 'translateX(5px)';
    } else {
        setTheme('dark-theme');
        toggleBall.style.transform = 'translateX(30px)';
    }
});

// Check for saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
    if (savedTheme === 'dark-theme') {
        toggleBall.style.transform = 'translateX(30px)';
    }
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// ParticlesJS Background
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
    console.log('particles.js config loaded');
});

// Skill Bar Animation
const skillBars = document.querySelectorAll('.skill-level');

function animateSkillBars() {
    skillBars.forEach(skillBar => {
        const skillLevel = skillBar.dataset.level;
        skillBar.style.setProperty('--width', skillLevel + '%');
        skillBar.classList.add('animate');
    });
}

function checkSkillsVisible() {
    const skillsSection = document.querySelector('#skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (skillsPosition < screenPosition) {
        animateSkillBars();
    }
}

window.addEventListener('scroll', checkSkillsVisible);

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from other buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.dataset.filter;

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.dataset.category.includes(filterValue)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Scroll Reveal Animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
});

sr.reveal(`.hero-content, .about-content, .skills-content, .projects-filter, .projects-grid, .publications-list, .timeline`, {interval: 200});
