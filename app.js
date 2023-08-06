let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let btns = ["yellow", "red", "green", "blue"]
let h2 = document.querySelector('h2');

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function (){
        btn.classList.remove('flash');
    },250);
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function (){
        btn.classList.remove('userFlash');
    },250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomBtns = document.querySelector(`.${randomColor}`);
    
    console.log(randomColor)
    gameFlash(randomBtns);
}

function pressBtns() {
    console.log(this);
    let userClickedBtn = this;
    userFlash(userClickedBtn);
}


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener('click',pressBtns);
}