document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggler-btn");
  const navToggler = document.getElementById("nav-collapsed");
  const body = document.body;
  const html = document.documentElement;

  toggleBtn.addEventListener("click", () => {
    navToggler.classList.toggle("translate-x-0");
    
    html.classList.toggle("overflow-hidden");
    body.classList.toggle("overflow-hidden");
  });
});
