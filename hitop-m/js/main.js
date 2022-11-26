const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "cube",
  loop: true,
  navigation: {
    prevEl: "#mainVisual .prev",
    nextEl: "#mainVisual .next",
  },
});

const newsSlider = new Swiper("#news .listBox", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  centeredSlides: true,
});

//f(x,y) = x+y*3; f(3,5) = 18

//변수로 인식을 시키겠다. 정의하는 거
//const btnAll
const pi = 3.14;
let x = 10;
let myWeight = 80;

myWeight = myWeight + 10;
x = x + 10;
x = pi + 10;
console.log(x);

//1. 찾기...
//2. 찾은 것에 이벤트 걸기...
//3. gnb에 on class 달기...
const btnAll = document.querySelector(".all");
const gnb = document.querySelector("#gnb");
console.log(btnAll);
btnAll.addEventListener("click", function () {
  //alert("all 을 눌렀습니다.");
  gnb.classList.toggle("on");
  btnAll.classList.toggle("on");
  //add / remove
});
//alert("나는 바로뜨는 경고창입니다.");
