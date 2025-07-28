function makeball(){
var dummy="";
for(var i=1; i<=105; i++){
    var dum=Math.floor(Math.random()*10)
    dummy += (`<div class="ball">${dum}</div>`);
}
document.querySelector(".buble").innerHTML=dummy;
}


var hitu=0;
var scoredo=0;
var timer=60;

function hiter(){
    hitu=Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent=hitu;
}

function timeband(){

    var timerend=setInterval (function(){
        if(timer>0){
        timer--;
        document.querySelector(".time").textContent=timer;
        }
        else{
            clearInterval(timerend);
            document.querySelector("#b").innerHTML=`<h1 class="last">Game Over<br>Your Score is<br>${scoredo}</h1>`;
        }
    },1000)
}



function scorein(){
    scoredo+=10;
    document.querySelector(".score").textContent=scoredo;
}

document.querySelector("#b").addEventListener("click",function(check){
    var clicked=Number(check.target.textContent);
    if(clicked==hitu){
        scorein();
        hiter();
        makeball();
    }
})

timeband();