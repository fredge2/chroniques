// Défilement doux pour la navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animation d'apparition au défilement (Fade-in)
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Ne joue l'animation qu'une fois
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});
