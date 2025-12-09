document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggler-btn");
  const navToggler = document.getElementById("nav-collapsed");
  const body = document.body;
  const html = document.documentElement;

  toggleBtn.addEventListener("click", () => {
    navToggler.classList.toggle("translate-x-0");

    html.classList.toggle("overflow-hidden");
    body.classList.toggle("overflow-hidden");
    toggleBtn.classList.toggle("tilted");
  });
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    // speed: 3000,
    // autoplay: {
    //   delay: 0,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
 
});
