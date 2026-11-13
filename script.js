// ===================================
// CODOSPHERE WEBSITE JAVASCRIPT
// ===================================


// 1. Explore Our Services Button

const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", function () {
        document.getElementById("services").scrollIntoView({
            behavior: "smooth"
        });
    });
}


// 2. Mobile Navigation Menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu after clicking a link

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// 3. Back To Top Button

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// 4. Reveal Animation

const revealElements = document.querySelectorAll(
    ".service-card, .team-card, .why-card, .portfolio-card, .process-card, .info-card"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(function (element) {
    observer.observe(element);
});


// 5. Automatic Copyright Year

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// 6. Console Welcome Message

console.log("Welcome to Codosphere!");
console.log("Building the future, one line of code at a time.");