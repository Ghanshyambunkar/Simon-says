let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function levelUp(){
    level++;
    userSeq=[];
    h3.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function chackAns(idx){

    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h3.innerHTML=`Game over! your score was <b>${level}</b> <br> Press any key to start....`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    chackAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}