const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const NUM_ENEMY_MAX_LIFE = 3;
const NUM_PLAYER_MAX_LIFE = 3;

const RPS_NO_PLAYING = 0;
const RPS_RULE = 1;
const RPS_PLAYING = 2;

let player = {
    life: NUM_PLAYER_MAX_LIFE, //현재 체력
    maxLife: NUM_PLAYER_MAX_LIFE,   //최대 체력
    choice: ROCK   //가위 바위 보 중 선택한 값.
}

let enemy = {
    life: NUM_ENEMY_MAX_LIFE,
    maxLife: NUM_ENEMY_MAX_LIFE,
    choice: ROCK
}

let RPS = {
    status: RPS_NO_PLAYING, //현재 진행 상테
}

const RPSScreen_section = document.getElementById("RPS");
const RPSRules_section = document.getElementById("RPS-rules");
const RPSPlay_section = document.getElementById("RPS-play");
const RPSHeaderR_span = document.getElementById("RPS-header-R");
const RPSHeaderP_span = document.getElementById("RPS-header-P");
const RPSHeaderS_span = document.getElementById("RPS-header-S");
const RPSResult_span = document.getElementById("result");
const RPSEnemyR_section = document.getElementById("enemy-r");
const RPSEnemyP_section = document.getElementById("enemy-p");
const RPSEnemyS_section = document.getElementById("enemy-s");
const RPSPlayerR_section = document.getElementById("player-r");
const RPSPlayerP_section = document.getElementById("player-p");
const RPSPlayerS_section = document.getElementById("player-s");

const RPSPlayerLife1_div = document.getElementById("player-life1");
const RPSPlayerLife2_div = document.getElementById("player-life2");
const RPSPlayerLife3_div = document.getElementById("player-life3");

const STYLE_SELECTED_BORDER = "4px solid #101010";
const STYLE_UNSELECTED_BORDER = "1px solid #303030";

let showRPSRules = function () {
    setTimeout(function () {
        RPSRules_section.style.display = "block";
        RPS.status = RPS_RULE;
        setHelpMessage("A : Start, B : Exit");
    }, 500);
}

let hideRPSRules = function () {
    RPSRules_section.style.display = "none";
}

let showRPSTitle = function () {
    setTimeout(function () {
        RPSHeaderR_span.style.visibility = "visible";
    }, 500);
    setTimeout(function () {
        RPSHeaderP_span.style.visibility = "visible";
    }, 1000);
    setTimeout(function () {
        RPSHeaderS_span.style.visibility = "visible";
        showRPSRules();
    }, 1500);
}

let hideRPSTitle = function () {
    RPSHeaderR_span.style.visibility = "hidden";
    RPSHeaderP_span.style.visibility = "hidden";
    RPSHeaderS_span.style.visibility = "hidden";
    hideRPSRules();
}

let exitRPS = function () {
    RPSScreen_section.style.display = "none";
    screen_section.style.display = "block";
    RPSPlay_section.style.display = "none";
    hideRPSTitle();
    setHelpMessage(DEFAULT_HELP_MESSAGE);
    RPS.status = RPS_NO_PLAYING;
}

let startRPS = function () {
    //가위바위보 게임 선택한 이후 실행될 함수. 가위바위보 화면을 띄운다.
    RPSScreen_section.style.display = "block";
    setHelpMessage("");
    showRPSTitle();
}

let initRPS = function () {
    //가위바위보 게임 시작시 초기화 세팅하는 함수.
    player.choice = ROCK;
    applyRPSBorder(player.choice);
    RPSEnemyR_section.style.display = "none";
    RPSEnemyP_section.style.display = "none";
    RPSEnemyS_section.style.display = "none";

    // RPSPlayerLife1_div.style.backgroundImage = "url('life.png')";
}

let applyRPSBorder = function (playerChoice) {
    switch (playerChoice) {
        case ROCK:
            RPSPlayerR_section.style.border = STYLE_SELECTED_BORDER;
            RPSPlayerP_section.style.border = STYLE_UNSELECTED_BORDER;
            RPSPlayerS_section.style.border = STYLE_UNSELECTED_BORDER;
            break;
        case PAPER:
            RPSPlayerR_section.style.border = STYLE_UNSELECTED_BORDER;
            RPSPlayerP_section.style.border = STYLE_SELECTED_BORDER;
            RPSPlayerS_section.style.border = STYLE_UNSELECTED_BORDER;
            break;
        case SCISSORS:
            RPSPlayerR_section.style.border = STYLE_UNSELECTED_BORDER;
            RPSPlayerP_section.style.border = STYLE_UNSELECTED_BORDER;
            RPSPlayerS_section.style.border = STYLE_SELECTED_BORDER;
            break;
        default:
            console.log("applyRPSBorder argument error");
            break;
    }
}

let moveRPS = function (dir) {
    if ("left" === dir) {
        if (ROCK === player.choice) player.choice = SCISSORS;
        else player.choice -= 1;
    } else if ("right" === dir) {
        if (SCISSORS === player.choice) player.choice = ROCK;
        else player.choice += 1;
    } else {
        console.log("moveRPS arguments error");
        return;
    }
    applyRPSBorder(player.choice);
}

let playRPS = function () {
    //가위바위보 게임 시작. Rule 화면에서 A선택시 실행.
    hideRPSRules();
    RPSPlay_section.style.display = "block";
    setHelpMessage("A : Choice, B : Exit");
    RPSResult_span.innerText = "한 판 붙자!";
    RPS.status = RPS_PLAYING;
    initRPS();
}

let showEnemyChoice = function (enemyChoice) {
    switch (enemyChoice) {
        case ROCK:
            RPSEnemyR_section.style.display = "inline-block";
            RPSEnemyP_section.style.display = "none";
            RPSEnemyS_section.style.display = "none";
            break;
        case PAPER:
            RPSEnemyR_section.style.display = "none";
            RPSEnemyP_section.style.display = "inline-block";
            RPSEnemyS_section.style.display = "none";
            break;
        case SCISSORS:
            RPSEnemyR_section.style.display = "none";
            RPSEnemyP_section.style.display = "none";
            RPSEnemyS_section.style.display = "inline-block";
            break;
        default:
            console.log("applyRPSBorder argument error");
            break;
    }
}

let setRPSResultMessage = function(message) {
    RPSResult_span.innerText = message;
}

let compare = function () {
    enemy.choice = Math.floor(Math.random() * 3 + 1); //1~3부터 랜덤.
    showEnemyChoice(enemy.choice);
    let choices = "" + player.choice + enemy.choice;
    switch (choices) {
        case "11":
        case "22":
        case "33":
            console.log("draw");
            setRPSResultMessage("DRAW");
            break;

        case "13": //player win : r-s, p-r, s-p
        case "21":
        case "32":
            console.log("Player win!");
            setRPSResultMessage("Player win");
            break;

        case "31": //player loses : s-r, r-p, p-s
        case "12":
        case "23":
            console.log("Player loses!");
            setRPSResultMessage("Player loses");
            break;
        default:
            console.log("compare error");
            break;
    }
}