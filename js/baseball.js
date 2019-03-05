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
/**
 * 입력 번호판 이동
 * 
 * 제일 왼쪽에서 left 누르면 오른쪽 끝으로 이동.
 * 제일 오른쪽에서 right 누르면 왼쪽 끝으로 이동.
 * 제일 위에서 up 누르면 맨 아래로 이동.
 * 제일 아래에서 bottom 누르면 맨 위로 이동.
 */
let currButtonNum = 0;
let moveInputButton = (dir) => {
    let currButtonClassName = "";
    for(let i = 0; i<baseballInputButtons_div.length; i+=1) {
        if(baseballInputButtons_div[i].className.includes("baseball-selected-number")) {
            currButtonNum = i + 1;
            currButtonClassName = baseballInputButtons_div[i].className;
            break;
        }
    }
    baseballInputButtons_div[currButtonNum-1].className = currButtonClassName.replace(" baseball-selected-number", "");
    switch(dir) {
        case "up":
        if(currButtonClassName.includes("top")) {
            currButtonNum += 9;
        } else {
            currButtonNum -= 3;
        }
        currButtonClassName = baseballInputButtons_div[currButtonNum-1].className;
        break;

        case "down":
        if(currButtonClassName.includes("bottom")) {
            currButtonNum -= 9;
        } else {
            currButtonNum += 3;
        }
        currButtonClassName = baseballInputButtons_div[currButtonNum-1].className;
        break;

        case "left":
        if(currButtonClassName.includes("left")) {
            currButtonNum += 2;
        } else {
            currButtonNum -= 1;
        }
        currButtonClassName = baseballInputButtons_div[currButtonNum-1].className;
        break;

        case "right":
        if(currButtonClassName.includes("right")) {
            currButtonNum -= 2;
        } else {
            currButtonNum += 1;
        }
        currButtonClassName = baseballInputButtons_div[currButtonNum-1].className;
        break;

        default:
        console.log(`moveIntputButton dir error : ${dir}`);
        break;
    }
    baseballInputButtons_div[currButtonNum-1].className = currButtonClassName.concat(" baseball-selected-number");
}