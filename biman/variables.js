var num01 = 10;
var num01 = 50;
let num02 = 20;
//console.log(num02);

let aa = 10;
if (true) {
  let bb = 20;
} else {
  let cc = 30;
  console.log("🚀 ~ file: variables.js ~ line 7 ~ aa", bb);
}
//console.log("🚀 ~ file: variables.js ~ line 9 ~ bb", bb);
//let, const 는 block scope
//var 는 function scope를 따른다.

var num = 20; // 전역 변수
function test() {
  var localNum = 10;
  if (true) {
    var functionNum = "나는 var로 선언된 functionNum입니다.";
    let blockNum = "나는 let으로 선언된 blockNum입니다.";
  }
  console.log("🚀 ~ file: variables.js ~ line 22 ~ test ~ blockNum", functionNum);
}
test(); // 함수의 호출....
console.log(Math.round(1.6));

let age = 20;
let name = "장성호";
let ok = true;
let colors = ["red", "green", "blue", "orange"]; // 배열, array
let uriban = ["이원욱", "최어진", "장혁"];
console.log(uriban[0]);
console.log(uriban[1]);
uriban.push("이중화");
console.log(uriban[3]);

console.log(`나의 이름은  ${name} 이고 나의 나이는 ${age} `);
