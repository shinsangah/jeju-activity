// SWIPER
const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disabledinInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    prevEl: ".swiper .swiper-button-prev",
    nextEl: ".swiper .swiper-button-next",
  },
});

// AutoPlay 컨트롤
function controlAutoPlay() {
  if (swiper.autoplay.running === false) {
    swiper.autoplay.start();
  } else {
    swiper.autoplay.stop();
  }
}

// 제목 클릭해서 스크롤 이동



// ARROW 클릭해서 스크롤 페이지 이동
const park981 = document.querySelector('.park981');
const park981Height = 1066;
const firstarrow = document.querySelector('.firstarrow')

let firstarrowClick = function () {
  window.scroll({
    behavior: "smooth",
    top: park981Height,
    left: 0
  })
}

firstarrow.addEventListener("click", firstarrowClick)

