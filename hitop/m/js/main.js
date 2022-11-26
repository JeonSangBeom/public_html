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

/*
const btnAll = document.querySelector(".all");
const gnb = document.querySelector("#gnb");
btnAll.addEventListener("click", function () {
  gnb.classList.toggle("on");
  btnAll.classList.toggle("on");
});
*/
// jQuery  ===  $
// js 표준으로 자리잡기 전에... 웹개발 힘들었음....
const header = $("#header");
const btnAll = $(".all");
const gnb = $("#gnb");
const depth02 = gnb.find(".list > li > .depth02 ");
const depth01 = gnb.find(".list > li > a");

//const header01 = document.querySelector("#header");

btnAll.on("click", function () {
  //jQuery class관련한 4가지 메서드를 제공한다.  addClass, removeClass, hasClass, toggleClass
  gnb.toggleClass("on");
  btnAll.toggleClass("on");
  depth02.stop().delay(500).slideUp();
});
//a태그에 이벤트 걸때는 e.preventDefault() 를 쓰던지  아니면 마지막 줄에 return을 쓴다.
//자바스크립트의 this context환경에 따라 달라진다.

//dom제어 스크립트는 일단 잘찾아야 한다.
//찾은 다음 조작
depth01.on("click", function (e) {
  console.log("aaa");
  const selectedDepth02 = $(this).siblings(".depth02");
  const parentDepth02 = $(this).parent().siblings().find(".depth02");
  parentDepth02.stop().slideUp();
  selectedDepth02.stop().slideToggle(); //  show() 메서드는 display를 block으로 바꿔 준다.  hide() 는 display를 none으로 바꿔준다. toggle()
  return false;
});

//syntax error  문법적 오류
//not a function  메서드나 내가 만든 함수의 이름이 틀린경우
//not defined   변수가 정의되어 있지 않거나 변수 scope를 챙겨봐야 한다.

//bom
$(window).on("scroll", function () {
  //console.log($(window).scrollTop());
  const st = $(window).scrollTop();
  if (st > 0) {
    if (!header.hasClass("scroll")) {
      header.addClass("scroll");
    }
  } else {
    if (header.hasClass("scroll")) {
      header.removeClass("scroll");
    }
  }
});
