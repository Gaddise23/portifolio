// TYPEWRITER EFFECT
const text = "Full-Stack Developer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

typing();

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// DARK MODE TOGGLE
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const icon = themeBtn.querySelector('i');
    if (body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// SKILLS JS HOVER EFFECT
const skills = document.querySelectorAll('.skills span');
skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = '#00ff99';
        skill.style.color = '#000';
        skill.style.transform = 'scale(1.1)';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.backgroundColor = '#1a1a1a';
        skill.style.color = 'white';
        skill.style.transform = 'scale(1)';
    });
});