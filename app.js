//자바스크립트로 제어할 요소들에 대한 node 선언
const screen_section = document.getElementById("screen");
const selectArrow_span = document.getElementById("select-arrow");
const btnA_section = document.getElementById("button-A");
const btnB_section = document.getElementById("button-B");
const btnUp_section = document.getElementById("button-up");
const btnLeft_section = document.getElementById("button-left");
const btnRight_section = document.getElementById("button-right");
const btnDown_section = document.getElementById("button-down");

//테스트용.
btnA_section.addEventListener('click', function() {
    console.log('A');
});
btnB_section.addEventListener('click', function() {
    console.log("B");
});
btnUp_section.addEventListener('click', function() {
    console.log("up");
});
btnLeft_section.addEventListener('click', function() {
    console.log("left");
});
btnRight_section.addEventListener('click', function() {
    console.log("right");
});
btnDown_section.addEventListener('click', function() {
    console.log("down");
});

let main = function() {
    console.log("app.js loaded");
}

main();