document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggler-btn");
  const navToggler = document.getElementById("nav-collapsed");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    navToggler.classList.toggle("translate-x-0");
    body.classList.toggle("overflow-hidden");
  });
});
