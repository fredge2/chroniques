document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");
  const burgerBtn = document.querySelector(".burger-menu");
  const nav = document.querySelector("nav");

  function showSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    navLinks.forEach((navItem) => {
      navItem.classList.toggle(
        "active",
        navItem.getAttribute("data-target") === targetId,
      );
    });

    pages.forEach((page) => page.classList.remove("active"));
    targetSection.classList.add("active");
  }

  // 1. MENU MOBILE
  if (burgerBtn) {
    burgerBtn.addEventListener("click", () => {
      nav.classList.toggle("active-menu");
    });
  }

  // 2. NAVIGATION ENTRE LES SECTIONS
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-target");
      showSection(targetId);
      history.replaceState(null, "", `#${targetId}`);

      if (window.innerWidth <= 900) {
        nav.classList.remove("active-menu");
      }
    });
  });

  // 3. OUVERTURE DIRECTE VIA ANCRE DANS L'URL (#boutique, #saga...)
  const initialHash = window.location.hash.replace("#", "");
  if (initialHash) {
    showSection(initialHash);
  }
});
