var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  autoplay: {
    delay: 3000, // chuyển slide mỗi 1 giây
    disableOnInteraction: false, // không dừng khi người dùng tương tác
  },
  loop: true, // lặp vô hạn
});
window.addEventListener("resize", function () {
  swiper.update(); // Cập nhật lại kích thước swiper
  swiper.autoplay.start(); // Bắt autoplay lại nếu cần
});
// Feedback Swiper
const feedbackSwiper = new Swiper(".feedbackSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
