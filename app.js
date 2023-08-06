const gameSeq = []
const userSeq = []

let started = false;
const level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
    }
});

