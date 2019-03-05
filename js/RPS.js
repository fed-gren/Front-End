const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const RPS_NO_PLAYING = 0;
const RPS_RULE = 1;
const RPS_PLAYING = 2;
const RPS_VICTORY = 3;
const RPS_GAME_OVER = 4;

let player = {
    life: 3, //현재 체력
    maxLife: 3,   //최대 체력
    choice: ROCK   //가위 바위 보 중 선택한 값.
}

let enemy = {
    life: 3,
    maxLife: 3,
    choice: ROCK
}

let RPS = {
    status: RPS_NO_PLAYING, //현재 진행 상테
    stage: 1
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

const RPSEnemyLife1_div = document.getElementById("enemy-life3");
const RPSEnemyLife2_div = document.getElementById("enemy-life2");
const RPSEnemyLife3_div = document.getElementById("enemy-life1");

const RPSEnemyImage_img = document.getElementById("enemy-image");
const RPSPlayerImage_img = document.getElementById("player-image");

const RPSPlayerLife1_div = document.getElementById("player-life1");
const RPSPlayerLife2_div = document.getElementById("player-life2");
const RPSPlayerLife3_div = document.getElementById("player-life3");

const STYLE_SELECTED_BORDER = "4px solid #101010";
const STYLE_UNSELECTED_BORDER = "1px solid #303030";

const RPSPlayerLifeArray = [0, RPSPlayerLife1_div, RPSPlayerLife2_div, RPSPlayerLife3_div];
const RPS_LIFE_IMAGE_URL = "url(./images/life.png)";
const RPS_NO_LIFE_IMAGE_URL = "url(./images/no-life.png)";

let showRPSRules = () => {
    setTimeout(() => {
        RPSRules_section.style.display = "block";
        RPS.status = RPS_RULE;
        setHelpMessage("A : Start, B : Exit");
    }, 500);
}

let hideRPSRules = () => {
    RPSRules_section.style.display = "none";
}

let showRPSTitle = () => {
    setTimeout(() => {
        RPSHeaderR_span.style.visibility = "visible";
    }, 500);
    setTimeout(() => {
        RPSHeaderP_span.style.visibility = "visible";
    }, 1000);
    setTimeout(() => {
        RPSHeaderS_span.style.visibility = "visible";
        showRPSRules();
    }, 1500);
}

let hideRPSTitle = () => {
    RPSHeaderR_span.style.visibility = "hidden";
    RPSHeaderP_span.style.visibility = "hidden";
    RPSHeaderS_span.style.visibility = "hidden";
    hideRPSRules();
}

let exitRPS = () => {
    RPSScreen_section.style.display = "none";
    screen_section.style.display = "block";
    RPSPlay_section.style.display = "none";
    hideRPSTitle();
    setHelpMessage(DEFAULT_HELP_MESSAGE);
    RPS.status = RPS_NO_PLAYING;
}

let startRPS = () => {
    //가위바위보 게임 선택한 이후 실행될 함수. 가위바위보 화면을 띄운다.
    RPSScreen_section.style.display = "block";
    setHelpMessage("");
    showRPSTitle();
}

let RPSGameWin = () => {
    // setRPSResultMessage("Victory!!!");
    RPS.status = RPS_VICTORY;
    for (let i = 0; i <= 5; i += 1) {
        setTimeout(() => {
            setRPSResultMessage("Victory! Exit " + (5 - i));
            if (5 === i) exitRPS();
        }, i * 1000);
    }
}

let RPSGameOver = () => {
    RPS.status = RPS_GAME_OVER;
    for (let i = 0; i <= 5; i += 1) {
        setTimeout(() => {
            setRPSResultMessage("Game Over..Exit " + (5 - i));
            if (5 === i) exitRPS();
        }, i * 1000);
    }
}

let setPlayerLife = () => {
    switch (player.life) {
        case 0:
            //game over
            console.log("player life : " + player.life)
            RPSPlayerLife1_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSPlayerLife2_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSPlayerLife3_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSGameOver();
            break;
        case 1:
            console.log("player life : " + player.life)
            RPSPlayerLife1_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSPlayerLife2_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSPlayerLife3_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            break;
        case 2:
            console.log("player life : " + player.life)
            RPSPlayerLife1_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSPlayerLife2_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            RPSPlayerLife3_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            break;
        case 3:
            console.log("player life : " + player.life)
            RPSPlayerLife1_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            RPSPlayerLife2_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            RPSPlayerLife3_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            break;
        default:
            console.log("set player life error");
            break;
    }
}

let setEnemyLife = () => {
    switch (enemy.life) {
        case 0:
            //Victory!!
            console.log("enemy life : " + enemy.life)
            RPSEnemyLife1_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSEnemyLife2_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSEnemyLife3_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSGameWin();
            break;
        case 1:
            console.log("enemy life : " + enemy.life)
            RPSEnemyLife1_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSEnemyLife2_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSEnemyLife3_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            break;
        case 2:
            console.log("enemy life : " + enemy.life)
            RPSEnemyLife1_div.style.backgroundImage = RPS_NO_LIFE_IMAGE_URL;
            RPSEnemyLife2_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            RPSEnemyLife3_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            break;
        case 3:
            console.log("enemy life : " + enemy.life)
            RPSEnemyLife1_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            RPSEnemyLife2_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            RPSEnemyLife3_div.style.backgroundImage = RPS_LIFE_IMAGE_URL;
            break;
        default:
            console.log("set enemy life error");
            break;
    }
}

let initRPS = () => {
    //가위바위보 게임 시작시 초기화 세팅하는 함수.
    player.choice = ROCK;
    applyRPSBorder(player.choice);
    RPSEnemyR_section.style.display = "none";
    RPSEnemyP_section.style.display = "none";
    RPSEnemyS_section.style.display = "none";

    player.life = player.maxLife;
    enemy.life = enemy.maxLife;
    setPlayerLife();
    setEnemyLife();

    RPSEnemyImage_img.src = "./images/enemy-idle.png";
    RPSPlayerImage_img.src = "./images/player.png";

    // RPSPlayerLife1_div.style.backgroundImage = "url('life.png')";
}

let applyRPSBorder = (playerChoice) => {
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

let moveRPS = (dir) => {
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

let playRPS = () => {
    //가위바위보 게임 시작. Rule 화면에서 A선택시 실행.
    hideRPSRules();
    RPSPlay_section.style.display = "block";
    setHelpMessage("A : Choice, B : Exit");
    RPSResult_span.innerText = "한 판 붙자!";
    RPS.status = RPS_PLAYING;
    initRPS();
}

let showEnemyChoice = (enemyChoice) => {
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

let setRPSResultMessage = (message) => {
    RPSResult_span.innerText = message;
}

let compare = () => {
    enemy.choice = Math.floor(Math.random() * 3 + 1); //1~3부터 랜덤.
    showEnemyChoice(enemy.choice);
    let choices = "" + player.choice + enemy.choice;
    switch (choices) {
        case "11":
        case "22":
        case "33":
            console.log("draw");
            setRPSResultMessage("DRAW");
            RPSEnemyImage_img.src = "./images/enemy-idle.png";
            break;

        case "13": //player win : r-s, p-r, s-p
        case "21":
        case "32":
            console.log("Player win!");
            setRPSResultMessage("Player win");
            //상대 체력 깍고 적용하기.
            enemy.life -= 1;
            setEnemyLife();
            RPSEnemyImage_img.src = "./images/enemy-loses.png";
            break;

        case "31": //player loses : s-r, r-p, p-s
        case "12":
        case "23":
            console.log("Player loses!");
            setRPSResultMessage("Player loses");
            //내 체력 깍고 적용하기.
            player.life -= 1;
            setPlayerLife();
            RPSEnemyImage_img.src = "./images/enemy-win.png";
            break;
        default:
            console.log("compare error");
            break;
    }
}