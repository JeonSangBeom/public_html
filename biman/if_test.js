if (true && true) {
  // ~이고, ~면서
  console.log("둘다 true 이므로 출력됩니다.");
}
if (true && false) {
  console.log("둘중 하나가 false 이므로 출력되지 않습니다.");
}
if (true || false) {
  // ~거나, ~또는
  console.log("둘중 하나라도 true 이므로 출력됩니다.");
}
if (false || false) {
  console.log("둘다 false 이므로 출력되지 않습니다.");
}
