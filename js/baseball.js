const baseballScreen_section = document.getElementById("baseball");
const baseballHeader_p = document.getElementById("baseball-header");
const baseballContents_section = document.getElementById("baseball-contents");
const baseballRules_section = document.getElementById("baseball-rules");
const baseballPlay_section = document.getElementById("baseball-play");
const baseballScoreboard_section = document.getElementById("baseball-scoreborad");
const submittedNumber_p = document.getElementById("submitted-number");
const strikeCount_span = document.getElementById("strike-count");
const ballCount_span = document.getElementById("ball-count");
const baseballLifeTop_section = document.getElementById("baseball-life-top");
const baseballLifeBottom_section = document.getElementById("baseball-life-bottom");
const baseballFirstNumber_span = document.getElementById("baseball-first-number");
const baseballSecondNumber_span = document.getElementById("baseball-second-number");
const baseballThirdNumber_span = document.getElementById("baseball-third-number");

const baseballInputButtons_div = document.getElementsByClassName("grid-item");

let baseballRightAnswer = "";   //정답 저장
let currEnteredNum = "";        //입력되어있는 답 저장
/**
 * 정답 생성
 * 1~9까지 난수 3개 생성.
 * 하나씩 생성할 때마다 지금까지 나온 수인지 체크해서 맞다면 다시 생성
 */
let makeRightAnswer = () => {
    baseballRightAnswer = "";
    let randomNum = 0;
    while(3 > baseballRightAnswer.length) {
        randomNum = Math.floor(Math.random() * 9 + 1);
        while(baseballRightAnswer.includes(randomNum + "")) {
            randomNum = Math.floor(Math.random() * 9 + 1);
        }
        baseballRightAnswer += randomNum;
    }
    console.log(baseballRightAnswer);
}


/**
 * 스코어보드에 결과 반영
 */
let updateScoreBoard = (strike, ball) => {
    console.log(`${strike} strike, ${ball} ball`);
    submittedNumber_p.innerText = currEnteredNum;
    switch(strike) {
        case 0:
        strikeCount_span.innerText = "○ ○ ○";
        break;
        case 1:
        strikeCount_span.innerText = "● ○ ○";
        break;
        case 2:
        strikeCount_span.innerText = "● ● ○";
        break;
        case 3:
        strikeCount_span.innerText = "● ● ●";
        break;
    }
    switch(ball) {
        case 0:
        ballCount_span.innerText = "○ ○ ○";
        break;
        case 1:
        ballCount_span.innerText = "● ○ ○";
        break;
        case 2:
        ballCount_span.innerText = "● ● ○";
        break;
        case 3:
        ballCount_span.innerText = "● ● ●";
        break;
    }
}

/**
 * 입력 번호판 이동
 * 
 * 제일 왼쪽에서 left 누르면 오른쪽 끝으로 이동.
 * 제일 오른쪽에서 right 누르면 왼쪽 끝으로 이동.
 * 제일 위에서 up 누르면 맨 아래로 이동.
 * 제일 아래에서 bottom 누르면 맨 위로 이동.
 */
let currButtonNum = 1;
let moveInputButton = (dir) => {
    let currButtonClassName = "";
    for (let i = 0; i < baseballInputButtons_div.length; i += 1) {
        if (baseballInputButtons_div[i].className.includes("baseball-selected-number")) {
            currButtonNum = i + 1;
            currButtonClassName = baseballInputButtons_div[i].className;
            break;
        }
    }
    baseballInputButtons_div[currButtonNum - 1].className = currButtonClassName.replace(" baseball-selected-number", "");
    switch (dir) {
        case "up":
            if (currButtonClassName.includes("top")) {
                currButtonNum += 9;
            } else {
                currButtonNum -= 3;
            }
            currButtonClassName = baseballInputButtons_div[currButtonNum - 1].className;
            break;

        case "down":
            if (currButtonClassName.includes("bottom")) {
                currButtonNum -= 9;
            } else {
                currButtonNum += 3;
            }
            currButtonClassName = baseballInputButtons_div[currButtonNum - 1].className;
            break;

        case "left":
            if (currButtonClassName.includes("left")) {
                currButtonNum += 2;
            } else {
                currButtonNum -= 1;
            }
            currButtonClassName = baseballInputButtons_div[currButtonNum - 1].className;
            break;

        case "right":
            if (currButtonClassName.includes("right")) {
                currButtonNum -= 2;
            } else {
                currButtonNum += 1;
            }
            currButtonClassName = baseballInputButtons_div[currButtonNum - 1].className;
            break;

        default:
            console.log(`moveIntputButton dir error : ${dir}`);
            break;
    }
    baseballInputButtons_div[currButtonNum - 1].className = currButtonClassName.concat(" baseball-selected-number");
}

/**
 * 번호 입력, 지우기 및 정답 제출
 * 1. 번호 입력시, 중복된 수 입력 못하도록
 * 2. 정답 제출 시, 정답 수 3개 채워야만 제출.
 * 3. 현재 입력되어있는 수가 3개면, 더 이상 입력 안됨.
 */
let inputNumber = () => {
    if(currEnteredNum.includes(currButtonNum + "")) return; //중복된 수 입력 x
    switch (currEnteredNum.length) {
        case 0:
            baseballFirstNumber_span.innerText = currButtonNum;
            currEnteredNum += currButtonNum;
            break;
        case 1:
            baseballSecondNumber_span.innerText = currButtonNum;
            currEnteredNum += currButtonNum;
            break;
        case 2:
            baseballThirdNumber_span.innerText = currButtonNum;
            currEnteredNum += currButtonNum;
            break;
        default:
            return;
            break;
    }
}

let backspace = () => {
    switch (currEnteredNum.length) {
        case 3:
            baseballThirdNumber_span.innerText = "_";
            currEnteredNum = currEnteredNum.substring(0, currEnteredNum.length-1);
            break;
        case 2:
            baseballSecondNumber_span.innerText = "_";
            currEnteredNum = currEnteredNum.substring(0, currEnteredNum.length-1);
            break;
        case 1:
            baseballFirstNumber_span.innerText = "_";
            currEnteredNum = currEnteredNum.substring(0, currEnteredNum.length-1);
            break;
        default:
            return;
            break;
    }
}

let clearNumber = () => {
    baseballFirstNumber_span.innerText = "_";
    baseballSecondNumber_span.innerText = "_";
    baseballThirdNumber_span.innerText = "_";
    currEnteredNum = "";
}

let submitNumber = () => {
    if(3 > currEnteredNum.length) return;
    //정답이랑 비교해서 결과 scoreboard 조작하는 함수에 넘기기.
    let strike = 0;
    let ball = 0;
    for(let i = 0; i < 3; i += 1) {
        if(baseballRightAnswer.includes(currEnteredNum[i])) {
            if(currEnteredNum[i] === baseballRightAnswer[i]) strike += 1;
            else ball += 1;
        }
    }
    updateScoreBoard(strike, ball);
    clearNumber();  //결과 출력하고 비우기
}

let baseballPushA = () => {
    //currButtonNum 활용하여 현재 번호 입력.
    if (10 > currButtonNum) {
        inputNumber();
    } else if (10 === currButtonNum) {
        //clear
        clearNumber();
    } else if (11 === currButtonNum) {
        //submit
        submitNumber();
    } else if (12 === currButtonNum) {
        //backspace
        backspace();
    }
}

let initBaseball = () => {
    makeRightAnswer();
}

initBaseball();