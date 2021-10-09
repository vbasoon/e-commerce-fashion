let searchForm = document.querySelector(".search-form");

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

const swiper = new Swiper(".home-slider", {
  //spaceBetween: 20,
  centeredSlides: true,
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
