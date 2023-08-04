let randomnumber=parseInt(Math.floor(Math.random()*100)+1);
let submit =document.querySelector("#subt")
let userinput =document.querySelector("#guessfeild")
let guessslot =document.querySelector(".guesses")
let remaining =document.querySelector(".lastresult")
let loworhi =document.querySelector("#loworhi")
let startover =document.querySelector(".resultparas")

let p=document.createElement("p")

let prevguess=[];
let numguess=1;
let playgame=true;

if(playgame){
    submit.addEventListener("click",(e) =>{
        e.preventDefault();
        const guess=parseInt(userinput.value)
        console.log(guess);
        validateguess(guess)
    })
}
function validateguess(guess){
    if(isNaN(guess)){
        alert("enter valid number")
    }
    else if(guess<1){
        alert("enter the valid number")
    }
    else if(guess>100){
        alert ("enter the valid number")
    }
    else{
        prevguess.push(guess);
        if(numguess === 11){
            displaymessage(`Game Over...Random number is ${randomnumber} click on 'start over' to restart the game`);
            displayguess(guess);
            endgame();
        }
        else{
            checkguess(guess);
            displayguess(guess);
        }
    }
}

function checkguess(guess) {
    if(guess === randomnumber){
        displaymessage("You got it right")
        endgame()
    }else if(guess < randomnumber){
        displaymessage("Number is too low")
    }
    else if (guess > randomnumber) {
        displaymessage("Number is too high")
        
    }
}

function displayguess(guess){
    userinput.value=" ";
    guessslot.innerHTML +=`${ guess },`
    numguess++;
    remaining.innerHTML=`${11-numguess}`
}


function displaymessage(message) {
    loworhi.innerHTML=`<h2>${ message }</h2>`
    
}
function endgame() {
    userinput.value=' ';
    userinput.setAttribute("disabled","");
    p.classList.add("button")
    p.innerHTML=`<h2 id="start">Start Over</h2>`
    
    startover.appendChild(p)
    playgame=false;
    newgame()
    
}
function newgame() {
    const newgame=document.querySelector("#start")
    newgame.addEventListener("click",()=>{
        randomnumber=parseInt(Math.floor(Math.random()*100)+1);
        prevguess=[]
        numguess=1;
        guessslot.innerHTML="";
        remaining.innerHTML=`${11-numguess}`;
        userinput.removeAttribute("disabled")
        startover.removeChild(p)
        playgame=true;
    })
    
}


