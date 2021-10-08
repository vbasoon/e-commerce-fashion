let menuBtn = document.querySelector("#menu-btn");
let menuNav = document.querySelector(".header__menu");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  menuNav.classList.toggle("active");
};

document.querySelectorAll(".home__slider img").forEach((images) => {
  images.onclick = () => {
    let src = images.getAttribute("src");
    document.querySelector(".home__image img").src = src;
  };
});

const swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  //centeredSlides: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
