const inputGuess= document.getElementById('guess-input');
const inputSubmit= document.getElementById('guess-value');
const  minN=document.querySelector('.min-num');
const maxN=document.querySelector('.max-num');
const messageText=document.querySelector('.message');

const  min=1,
       max=10;
let attempt=3;
let attemptLeft=attempt;
let guessNumber= parseInt(generateRadomNumber());
console.log(guessNumber)
if(guessNumber==0)
guessNumber+=1;

minN.textContent=min;
maxN.textContent=max;

inputSubmit.addEventListener('click',(e)=>{

  if(inputSubmit.value==='Play Again'){
    inputGuess.style.borderColor='grey';
    inputGuess.disabled=false;
    inputGuess.value='';
    inputSubmit.value='Submit';
    showMessage('')
    guessNumber= parseInt(generateRadomNumber());
    attempt=3;
    console.log(guessNumber);
  }else{
    let inputValue= parseInt(inputGuess.value);
    checkNumber(guessNumber,inputValue);

  }
 
  
  

})

function generateRadomNumber(){
 return Math.floor(Math.random()*10);
}

function checkNumber(randN,inputN){
  if(isNaN(inputN)||inputN>max||inputN<0){
    showMessage(`Please enter number between ${min} and ${max}`,'red')
  }
   else{
    if(randN===inputN){
      
      
      inputSubmit.value='Play Again';
      showMessage(`Hooray !! Match Found`,'green')
    }else{
      attemptLeft=attempt-1;
      inputGuess.value='';
      if(attemptLeft==0){
        showMessage(`NO more attempt left Number was ${randN}`,'red');
        inputGuess.value='';
        inputGuess.disabled=true;
        inputSubmit.value='Play Again';
      
      }else{
        showMessage(`Match not found ${attemptLeft} attempt left`,'red')
        attempt=attemptLeft;
      }
      
    }

  }
}


function showMessage(msg,color){
 messageText.textContent=msg;
 messageText.style.color=color;
 inputGuess.value=''
 inputGuess.style.borderColor=color;
}