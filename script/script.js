document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  let luxyEnabled = false;

  function enableLuxy() {
    if (!luxyEnabled) {
      luxy.init({
        wrapper: "#luxy",
        targets: ".luxy-el",
        wrapperSpeed: 0.08,
      });
      luxyEnabled = true;
      console.log("Luxy Enabled");
    }
  }

  function disableLuxy() {
    if (luxyEnabled) {
      luxy.destroy(); // turns off luxy completely
      luxyEnabled = false;
      console.log("Luxy Disabled");
    }
  }

  // Enable luxy only when width > 768px AND device is not touch
  function checkLuxyStatus() {
    if (window.innerWidth > 768 && !("ontouchstart" in window)) {
      enableLuxy();
    } else {
      disableLuxy();
    }
  }

  // Run on page load
  checkLuxyStatus();

  // Run when resizing the screen
  window.addEventListener("resize", checkLuxyStatus);

  // ------------------------------
  // Your existing navbar & swiper code
  // ------------------------------
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
      640: { slidesPerView: 2, spaceBetween: 20 },
    },
  });
  AOS.refresh();
});
