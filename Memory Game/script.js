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
    {name: "piranha", image:"/piranha.png"},
    {name: "sloth", image:"/sloth.png"},
    {name: "taucan", image:"/toucan.png"},
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
       let cardValues =[];
       size= (size*size)/2;

    //    random object selection
    for(let i=0; i<size; i++){
        const randomIndex = Math.floor(Math.random()* tempArray.length);
        cardValues.push(tempArray[randomIndex]);

        tempArray.splice(randomIndex,1)
    }
    return cardValues
}

const matrixGenerator = (cardValues, size = 4)=>{
  gameContainer.innerHTML = "";
  cardValues = [...cardValues,...cardValues];

//   simple suffle
cardValues.sort(()=> Math.random() -0.5);
for(let i=0; i<size*size; i++){

    gameContainer.innerHTML+= `<div class="card-container" data-card-value='${cardValues[i].name}'>
    <div class="card-before">?</div>
    <div class="card-after">
    <img src="${cardValues[i].image}" class="image"/>
    </div>
    
    </div>`
    gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

    cards= document.querySelectorAll(".card-container");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (!card.classList.contains("matched")) {
                card.classList.add("flipped");
    
                if (!firstCard) {
                    firstCard = card;
                    firstCardValue = card.getAttribute("data-card-value");
                } else {
                    movesCounter(); 
                    secondCard = card;
    
                    let secondCardValue = card.getAttribute("data-card-value");
                    if (firstCardValue == secondCardValue) {
                        // when both cards match
                        firstCard.classList.add("matched");
                        secondCard.classList.add("matched");
    
                        firstCard = false;
    
                        // win count increment as user selects correct match
                        winCount += 1;
    
                        if (winCount == Math.floor(cardValues.length / 2)) {
                            result.innerHTML = `<h2>You Won</h2><h4>Moves: ${movesCount}</h4>`;
                            stopGame();
                        }
                    } else {
                        
                        // if cards don't match
                        let [tempFirst, tempSecond] = [firstCard, secondCard];
                        firstCard = false;
                        secondCard = false;
    
                        setTimeout(() => {
                            tempFirst.classList.remove("flipped");
                            tempSecond.classList.remove("flipped");
                        }, 900);
                    }
                }
            }
        });
    });
}
}

// initialize the game
const initialize = () => {
    result.innerHTML = "";
    winCount = 0;
    movesCount = 0;
    timeValue.innerHTML = `<span>Time:</span> 00:00`;
    let cardValues = generateRandom();
    matrixGenerator(cardValues);
  };
  
  // start the game
  startButton.addEventListener("click", () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");
  
    // start timer
    interval = setInterval(timeGenerator, 1000);
    moves.innerHTML=`<span> Moves:<span/> ${movesCount}`
    initialize();
  });
  
  // stop the game
  stopButton.addEventListener("click", () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
  });