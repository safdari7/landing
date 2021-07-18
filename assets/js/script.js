// Swiper Slider

var swiper = new Swiper(".audience-Swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
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
  breakpoints: {
    1280: {
      spaceBetween: 60,
    },
  },
});

// Footer collapsble list

const titles = document.querySelectorAll("footer .list-container .title");

titles.forEach((item) => {
  item.addEventListener("click", function () {
    titles.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.toggle("active");
  });
});
