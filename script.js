document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger-menu");
  const nav = document.querySelector("nav");

  if (burgerBtn && nav) {
    burgerBtn.addEventListener("click", () => {
      nav.classList.toggle("active-menu");
    });
  }
});
