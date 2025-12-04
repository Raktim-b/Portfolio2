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
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true, // Pause autoplay when mouse enters the Swiper container
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 576px
      768: {
        slidesPerView: 2,
        // spaceBetween: 30,
      },
    },
  });
});
