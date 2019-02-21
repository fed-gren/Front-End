//자바스크립트로 제어할 요소들에 대한 node 선언
const screen_section = document.getElementById("screen");
const selectArrow_span = document.getElementById("select-arrow");
const RPSTitle_li = document.getElementById("RPS-title");        //RPS Rock Paper Scissors
const game2Title_li = document.getElementById("game2-title");
const game3Title_li = document.getElementById("game3-title");
const game4Title_li = document.getElementById("game4-title");
const game5Title_li = document.getElementById("game5-title");
const game6Title_li = document.getElementById("game6-title");
const btnA_section = document.getElementById("button-A");
const btnB_section = document.getElementById("button-B");
const btnUp_section = document.getElementById("button-up");
const btnLeft_section = document.getElementById("button-left");
const btnRight_section = document.getElementById("button-right");
const btnDown_section = document.getElementById("button-down");

const FIRST_GAME = 1;
const LAST_GAME = 6;
const GAP_ARROW_TOP = 42;   //42px 만큼 이동.
let current_arrow_top = 0;
let current_list = 0;

let gameList = [0, RPSTitle_li, game2Title_li, game3Title_li, game4Title_li, game5Title_li, game6Title_li];

let initListArrow = function() {
    selectArrow_span.style.top = "52px";
    current_arrow_top = 52;
    current_list_stage = 1;
    selectedGameEffects();
}

//테스트용.
let downListArrow = function() {
    current_arrow_top += GAP_ARROW_TOP;
    selectArrow_span.style.top = current_arrow_top + "px";
    current_list_stage += 1;
    selectedGameEffects();
}

let upListArrow = function() {
    current_arrow_top  -= GAP_ARROW_TOP;
    selectArrow_span.style.top = current_arrow_top + "px";
    current_list_stage -= 1;
    selectedGameEffects();
}

let selectedGameEffects = function() {
    for(let i=1; i<=6; i+=1) {
        if(i === current_list_stage) gameList[i].style.color = "rgb(66, 180, 22)";
        else gameList[i].style.color = "rgb(66, 121, 22)";
        // if(i === current_list_stage) gameList[i].style.color = "#303030";
        // else gameList[i].style.color = "rgb(66, 121, 22)";
    }
}

let choiceGame = function() {
    console.log(gameList[current_list_stage]);
}


btnA_section.addEventListener('click', function() {
    console.log('A');
    choiceGame();
});
btnB_section.addEventListener('click', function() {
    console.log("B");
});
btnUp_section.addEventListener('click', function() {
    if(1 === current_list_stage) {
        selectArrow_span.style.top = "262px";
        current_arrow_top = 262;
        current_list_stage = 6;
        selectedGameEffects();
    } else {
        upListArrow();
    }
});
btnLeft_section.addEventListener('click', function() {
    console.log("left");
});
btnRight_section.addEventListener('click', function() {
    console.log("right");
});
btnDown_section.addEventListener('click', function() {
    if(6 === current_list_stage) {
        initListArrow();
    } else {
        downListArrow();
    }
});


let main = function() {
    console.log("app.js loaded");
    initListArrow();
}

main();