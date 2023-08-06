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

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function (){
        btn.classList.remove('flash');
    },1000);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomBtns = document.querySelector(`.${randomColor}`);
    
    console.log(randomColor)
    btnFlash(randomBtns);
}

function pressBtns() {
    console.log("button was pressed");
}


let allBtns = document.querySelectorAll(".btn");
for (btns of allBtns){
    btns.addEventListener('click',pressBtns);
}