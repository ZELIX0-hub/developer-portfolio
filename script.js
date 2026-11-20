
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// TYPING ANIMATION
const typingElement = document.getElementById("typing");

const words = [
  "Software Developer",
  "Web Developer",
  "Creative Coder",
  "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentWord.substring(0, charIndex);

  let speed = deleting ? 45 : 90;

  if (!deleting && charIndex === currentWord.length) {
    deleting = true;
    speed = 1400;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  observer.observe(element);
});

// CURRENT YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();

// NAVBAR BACKGROUND ON SCROLL
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 30) {
    header.style.background = "rgba(7, 8, 17, 0.96)";
  } else {
    header.style.background = "rgba(7, 8, 17, 0.82)";
  }
});
