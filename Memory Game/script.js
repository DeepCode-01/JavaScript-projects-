const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time")
const startButton = document.getElementById("start-game");
const stopButton = document.getElementById("stop");

const gameContainer = document.querySelector(".game-container")
const result = document.getElementById("result")
const controls = document.querySelector(".controls-container")

let cards;
let interval;
let firstCard= false;
let secondCard = false;

// items array

const items = [
    {name: "bee", image:"/bee.png"},
    {name: "anaconda", image:"/anaconda.png"},
    {name: "chameleon", image:"/chameleon.png"},
    {name: "cockatoo", image:"/cockatoo.png"},
    {name: "crocodile", image:"/crocodile.png"},
    {name: "gorilla", image:"/gorilla.png"},
    {name: "macaw", image:"/macaw.png"},
    {name: "mockey", image:"/monkey.png"},
    {name: "piranha", image:"/piranh.png"},
    {name: "sloth", image:"/sloth.png"},
    {name: "taucan", image:"/taucan.png"},
    {name: "tiger", image:"/tiger.png"},
]

// time

let seconds = 0,
minutes = 0;

// moves & win count

let movesCount = 0, 
winCount= 0;

// timer 

const timeGenerator = ()=>{
    seconds += 1;

    if(seconds>= 60){
        minutes += 1
        seconds=0;
    }

    //  format time before displaying

let secondValue = seconds <10 ? `0${seconds}`:seconds;
let minutesValue = minutes <10 ? `0${minutes}`:minutes;

timeValue.innerHTML = `<span>Time:</span> ${minutesValue}:${secondValue}`
}

// calculating moves

const movesCounter = ()=>{
    movesCount += 1;
    moves.innerHTML =`<span>Moves:</span> ${movesCount}`
}

// pick random object

const generateRandom = (size=4)=>{
       let tempArray = [...items];
       let cardValue =[];
       size= (size*size)/2;

    //    random object selection
    for(let i=0; i<size; i++){
        const randomIndex = Math.floor(Math.random()* tempArray.length);
        cardValue.push(tempArray[randomIndex]);

        tempArray.slice(randomIndex,1)
    }
    return cardValue
}

const matrixGenerator = (cardValue, size = 4)=>{
  gameContainer.innerHTML = "";
  cardValue = [...cardValue,...cardValue];

//   simple suffle
cardValue.sort(()=> Math.random() -0.5);
for(let i=0; i<size*size; i++){

    gameContainer.innerHTML+= `<div class="card-container" data-card-value='${cardValue[i].name}'>
    <div class="card-before">?</div>
    <div class="card-after">
    <img src="${cardValue[i].image}" class="image"/>
    </div>
    
    </div>`
    gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;
}
}

const initializar= ()=>{
    result.innerHTML = "";
    winCount= 0;
    let cardValue= generateRandom();
    console.log(cardValue);
    matrixGenerator(cardValue);
}
initializar()