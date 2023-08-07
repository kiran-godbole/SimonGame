let gameSeq = [];
let userSeq = [];
let highScore = 0;


let started = false;
let level = 0;
let btns = ["yellow", "red", "green", "blue"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomBtns = document.querySelector(`.${randomColor}`);

    // console.log(randomColor)
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtns);
}



function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! your score was <b>${level} </b> <br> Press any key to start. `;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function updateHighScoreDisplay() {
    document.querySelector("#high-score").textContent = `High Score: ${highScore}`;
  }

function pressBtns() {
    console.log(this);
    let userClickedBtn = this;
    userFlash(userClickedBtn);

    userColor = userClickedBtn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", pressBtns);
}



function reset() {
    if (level > highScore) {
        highScore = level;
    }
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
        updateHighScoreDisplay();
    }
