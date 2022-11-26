const colors = ["red", "green", "blue"]; // reference type  array,object
// colors.unshift("yellow");
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
//const lastItem = colors.pop(); // push(값),pop() 뒤에서 밀어넣고 뒤에서 빼오기...
//const firstItem = colors.shift(); // unshift(값), shift() 앞으로 밀어넣고 앞에서 빼오기...
//console.log(lastItem, "====", firstItem);
//colors = ["aaa", "bbb"];  요거는 새로운 값을 다시 할당하므로 안됨.
const selectItem = colors.splice(1, 1);
//console.log(selectItem);
//console.log(colors);
const lastItem = colors.pop();
console.log(lastItem);
console.log(colors);
const jjang = {
  name: "장성호",
  age: 20,
};
const newJJang = jjang;
newJJang.name = "최문성";
console.log(jjang.name);
