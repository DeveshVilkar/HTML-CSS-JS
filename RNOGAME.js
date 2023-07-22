const n=Math.floor(Math.random()*10)+1;
console.log(n);
let count=0;

function checkGuess(){
  const userGuess=parseInt(document.getElementById('userGuess').value);
    if(isNaN(userGuess)){
        alert ("enter the valid number");
        return;
    }
    count++;
    if(userGuess==n){
        document.getElementById('result').innerText=`Congratulation! yo guessed correct number ${userGuess} and total number of guess are ${count}`;
    }else if(userGuess<n){
        document.getElementById('result').innerText=`Try again!Guess is too small`
    }else{
        document.getElementById('result').innerText=`Try again!Too high number`
    }
}

