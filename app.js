//자바스크립트로 제어할 요소들에 대한 node 선언
const screen_section = document.getElementById("screen");
const helpMessage = document.getElementById("help-message");
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
const FIRST_TOP = 52;
const LAST_GAME = 6;
const LAST_TOP = 262;
const GAP_ARROW_TOP = 42;   //42px 만큼 이동.
let current_arrow_top = 0;
let current_list = 0;

const DEFAULT_HELP_MESSAGE = "A : Select";

let gameList = [0, RPSTitle_li, game2Title_li, game3Title_li, game4Title_li, game5Title_li, game6Title_li];

let screen = {
    isList: true    //현재 게임 목록 상태라면 true, 아니면 false 
}

let setHelpMessage = function (message) {
    helpMessage.innerText = message;
}

let initListArrow = function () {
    selectArrow_span.style.top = "52px";
    current_arrow_top = 52;
    current_list_stage = 1;
    selectedGameEffects();
}

//테스트용.
let downListArrow = function () {
    current_arrow_top += GAP_ARROW_TOP;
    selectArrow_span.style.top = current_arrow_top + "px";
    current_list_stage += 1;
    selectedGameEffects();
}

let upListArrow = function () {
    current_arrow_top -= GAP_ARROW_TOP;
    selectArrow_span.style.top = current_arrow_top + "px";
    current_list_stage -= 1;
    selectedGameEffects();
}

let goToTopListArrow = function () { //맨 아래에서 다시 아래버튼 눌렀을 때, 화살표 제일 위로
    current_arrow_top = FIRST_TOP;
    selectArrow_span.style.top = current_arrow_top + "px";
    current_list_stage = FIRST_GAME;
    selectedGameEffects();
}

let goToBottomListArrow = function () {  //맨 위에서 다시 up 버튼 눌렀을 때, 화살표 제일 아래로.
    current_arrow_top = LAST_TOP;
    selectArrow_span.style.top = current_arrow_top + "px";
    current_list_stage = LAST_GAME;
    selectedGameEffects();
}

let selectedGameEffects = function () {
    for (let i = 1; i <= 6; i += 1) {
        if (i === current_list_stage) gameList[i].style.color = "rgb(66, 180, 22)";
        else gameList[i].style.color = "rgb(66, 121, 22)";
    }
}

let choiceGame = function () {
    // console.log(gameList[current_list_stage]);
    switch (gameList[current_list_stage]) {
        case RPSTitle_li:
            startRPS();
            screen.isList = false;
            break;
        case game2Title_li:
            console.log("game2 choice");
            break;
        case game3Title_li:
            console.log("game3 choice");
            break;
        case game4Title_li:
            console.log("game4 choice");
            break;
        case game5Title_li:
            console.log("game5 choice");
            break;
        case game6Title_li:
            console.log("game6 choice");
            break;
        default:
            console.log("game choice error");
            break;
    }
}


btnA_section.addEventListener('click', function () {
    console.log("clicked A, RPS status : " + RPS.status);
    if (RPS_GAME_OVER === RPS.status ||
        RPS_VICTORY === RPS.status) return;
    if (screen.isList) {
        console.log("choice game");
        choiceGame();
    } else if (RPS_RULE === RPS.status) {
        console.log("play game");
        playRPS();
    } else if (RPS_PLAYING === RPS.status) {
        compare();
    }
});

btnB_section.addEventListener('click', function () {
    console.log("clicked B, RPS status : " + RPS.status);
    if (RPS_GAME_OVER === RPS.status ||
        RPS_VICTORY === RPS.status) return;
    if (RPS_RULE === RPS.status) {
        exitRPS();
        screen.isList = true;
    } else if (RPS_PLAYING === RPS.status) {
        exitRPS();
        screen.isList = true;
    }

});

btnUp_section.addEventListener('click', function () {
    if (RPS_GAME_OVER === RPS.status ||
        RPS_VICTORY === RPS.status) return;
    if(true === screen.isList) {
        if (FIRST_GAME === current_list_stage) {
            goToBottomListArrow();
        } else {
            upListArrow();
        }
    }
});
btnLeft_section.addEventListener('click', function () {
    if (RPS_GAME_OVER === RPS.status ||
        RPS_VICTORY === RPS.status) return;
    if (RPS_PLAYING === RPS.status) {
        moveRPS("left");
        console.log("RPS move to left");
    }
});
btnRight_section.addEventListener('click', function () {
    if (RPS_GAME_OVER === RPS.status ||
        RPS_VICTORY === RPS.status) return;
    if (RPS_PLAYING === RPS.status) {
        moveRPS("right");
        console.log("RPS move to right");
    }
});
btnDown_section.addEventListener('click', function () {
    if (RPS_GAME_OVER === RPS.status ||
        RPS_VICTORY === RPS.status) return;
    if(true === screen.isList) {
        if (LAST_GAME === current_list_stage) {
            goToTopListArrow();
        } else {
            downListArrow();
        }
    }
});

let main = function () {
    console.log("app.js loaded");
    goToTopListArrow();
}

main();