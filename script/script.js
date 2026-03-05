document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lenis

  const lenis = new Lenis({
    duration: 2,

    autoRaf: true,
  });
  if (window.innerWidth < 1024) {
    lenis.destroy();
  }

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  const parallaxImg = document.querySelector(".parallax-img");

  if (parallaxImg) {
    lenis.on("scroll", ({ scroll }) => {
      const speed = 0.1; // adjust parallax strength
      parallaxImg.style.transform = `translateY(${scroll * speed}px)`;
    });
  }
  const parallaxCards = document.querySelectorAll(".parallax-card-img");

  if (parallaxCards) {
    lenis.on("scroll", ({ scroll }) => {
      const speed = 0.13; // tweak this

      parallaxCards.forEach((card) => {
        card.style.transform = `translateY(${scroll * speed}px)`;
      });
    });
  }

  requestAnimationFrame(raf);

  AOS.init();
  // Button Toggler

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

  // Swiper

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
  // Cursor

  const cursor = document.querySelector(".cursor");
  let mouseX = 0;
  let mouseY = 0;
  let clientX = 0;
  let clientY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  function MouseMove() {
    clientX += (mouseX - clientX) * 0.05;
    clientY += (mouseY - clientY) * 0.05;

    cursor.style.top = clientY + "px";
    cursor.style.left = clientX + "px";

    requestAnimationFrame(MouseMove);
  }
  MouseMove();
  // ===============================
// FORM VALIDATION
// ===============================
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll(".error-text").forEach(el => el.remove());
  document.querySelectorAll("input, textarea").forEach(el => {
    el.classList.remove("border-red-500");
  });

  // Helper function
  function showError(input, msg) {
    isValid = false;
    input.classList.add("border-red-500");

    const error = document.createElement("p");
    error.className = "error-text text-red-500 text-sm mt-1";
    error.innerText = msg;

    input.parentElement.appendChild(error);
  }

  // First Name
  if (firstName.value.trim().length < 2) {
    showError(firstName, "First name must be at least 2 characters");
  }

  // Last Name
  if (lastName.value.trim().length < 2) {
    showError(lastName, "Last name must be at least 2 characters");
  }

  // Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    showError(email, "Enter a valid email address");
  }

  // Message
  if (message.value.trim().length < 10) {
    showError(message, "Message must be at least 10 characters");
  }

  // Success
  if (isValid) {
    console.log("Form submitted successfully");

    form.reset();

    alert("Message sent successfully 🚀");
  }
});

  AOS.refresh();
});

// Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-overlay");
  const content = document.querySelector(".page-wrpr");

  setTimeout(() => {
    loader.classList.add("curtain-up");

    setTimeout(() => {
      loader.style.display = "none";
      content.classList.remove("cntnthidden");
      AOS.init();
      AOS.refreshHard();
    }, 1000);
  }, 2000);
});
