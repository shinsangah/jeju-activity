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
const textwrap = document.querySelectorAll(".text-wrap")
const contents = document.querySelectorAll(".content")
const firstTop = contents[0].offsetTop
const secondTop = contents[1].offsetTop
const thirdTop = contents[2].offsetTop
const fourthTop = contents[3].offsetTop
const fifthTop = contents[4].offsetTop

textwrap[0].onclick = function () {
  window.scroll({ top: firstTop, behavior: 'smooth' })
}
textwrap[1].onclick = function () {
  window.scroll({ top: secondTop, behavior: 'smooth' })
}
textwrap[2].onclick = function () {
  window.scroll({ top: thirdTop, behavior: 'smooth' })
}
textwrap[3].onclick = function () {
  window.scroll({ top: fourthTop, behavior: 'smooth' })
}
textwrap[4].onclick = function () {
  window.scroll({ top: fifthTop, behavior: 'smooth' })
}