let randomNum = parseInt(Math.random() * 100 + 1);

console.log(randomNum);

const submit = document.getElementById('subt')
const userInput   =  document.getElementById('guessField')
const guessSlot   =  document.querySelector('.guesses')
const remanning   =  document.querySelector('.lastResult')
const lowHigh     =  document.querySelector('.lowOrHi')
const startOver     =  document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess=[]
let numGuess = 1
let playGame=true;

if(playGame){
  submit.addEventListener('click',(e) =>{
    e.preventDefault()
   const guess = parseInt(userInput.value)
   validateGuess(guess)
  })
}

function validateGuess(guess){
    if(isNaN(guess)){
      alert('Please Enter a Valid Number')
    } else if(guess<1){
      alert('Please Enter a Valid Number')
    } else if(guess>100){
      alert('Please Enter a Valid Number')
    }
    else{
      prevGuess.push(guess)
      if(numGuess > 10){
        displyGuess(guess)
        displayMsg(`Game over. Random number was ${randomNum}`)
        endGame()
      }else{
        displyGuess(guess)
        checkGuess(guess)
      }
    }
}

function checkGuess(guess){
   if(guess === randomNum){
     displayMsg(`Bingo.You Guessed it Right1`)
     endGame()
   }
   else if(guess < randomNum){
    displayMsg(`Number is Tooo Lowwww!`)
   }else if(guess > randomNum){
    displayMsg(`Number is Tooo Highhhh!`)
   }
}


 function displyGuess(guess){
     
  userInput.value = ''
  guessSlot.innerHTML += ` ${guess} ,`
  numGuess++;
  remanning.innerHTML = `${12 - numGuess}`
 }


function displayMsg(message){
     lowHigh.innerHTML=`<h2>${message}</h1>`

}

function newGame(){
 
 const newGame = document.querySelector('#newGame')
  
 newGame.addEventListener('click',(e)=>{
  randomNum = parseInt(Math.random() * 100 + 1);
  prevGuess=[]
  numGuess=1
  guessSlot.innerHTML=''
  remanning.innerHTML = `${11 - numGuess}`
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame=true
 })
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id='newGame'>NewGame</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}