const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  pagination: {
    el: "#mainVisual .pagination",
    type: "bullets",
    clickable: true,
  },
});

const productSlider = new Swiper("#product .list", {
  speed: 600,
  slidesPerView: 1, //화면에 보여지는 갯수
  slidesPerGroup: 1, //묶음
  navigation: {
    prevEl: "#product .prev",
    nextEl: "#product .next",
  },
  scrollbar: {
    el: ".scroll",
    draggable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2, //묶음
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3, //묶음
    },
  },
});

const gnbItem = document.querySelector("#gnb > .list > li");
console.log(gnbItem);
