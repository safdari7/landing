var swiper = new Swiper(".audience-Swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

var swiper = new Swiper(".members .audience-Swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    1280:{
      spaceBetween: 60,
    }
  }
});
