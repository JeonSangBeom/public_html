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
  //slidesPerGroup: 3, //묶음
  navigation: {
    prevEl: "#product .prev",
    nextEl: "#product .next",
  },
  scrollbar: {
    el: ".scroll",
    draggable: true,
  },
});

const newsSlider = new Swiper("#news .contents", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 10,
});

function add(a, b) {
  return a + b * 2 + 10;
}
const sum = add(20, 30);
console.log(sum);

const btnAll = document.querySelector("#header .all");
const gnb = document.querySelector("#gnb");
const btnClose = document.querySelector("#gnb .close");
console.log(btnClose);
btnAll.addEventListener("click", function () {
  gnb.classList.add("on");
});
btnClose.addEventListener("click", () => {
  console.log("close");
  gnb.classList.remove("on");
});

//f(x,y) = x+y*3; f(3,5) = 18
