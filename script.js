// Défilement doux pour la navigation
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Retirer la classe active partout
      navLinks.forEach((nav) => nav.classList.remove("active"));
      pages.forEach((page) => page.classList.remove("active"));

      // Ajouter la classe active à l'élément cliqué
      this.classList.add("active");

      // Afficher la section correspondante
      const targetId = this.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });
});
