document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");
  const burgerBtn = document.querySelector(".burger-menu");
  const nav = document.querySelector("nav");

  // 1. LE MENU MOBILE (Ouvrir / Fermer)
  if (burgerBtn) {
    burgerBtn.addEventListener("click", () => {
      nav.classList.toggle("active-menu");
    });
  }

  // 2. LA NAVIGATION ENTRE LES SECTIONS
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // On désactive la surbrillance sur tous les liens
      navLinks.forEach((navItem) => navItem.classList.remove("active"));
      // On cache toutes les sections
      pages.forEach((page) => page.classList.remove("active"));

      // On active le lien cliqué
      this.classList.add("active");

      // On affiche la bonne section
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.classList.add("active");
      }

      // 3. FERMETURE AUTO (Si on est sur mobile, on referme le menu après avoir cliqué)
      if (window.innerWidth <= 900) {
        nav.classList.remove("active-menu");
      }
    });
  });
});