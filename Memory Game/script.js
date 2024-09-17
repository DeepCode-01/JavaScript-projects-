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
    cards= document.querySelector(".card-container");
    cards.forEach((card) => {
        card.addEventListener("click", ()=>{
            if(!card.classList.contain("matched")){
                card.classList.add("flipped")

                if(!firstCard){
                    firstCard= card;
                    firstCardValue = card.getAttribute("data-card-value")
                }
                else{
                    movesCount();
                    secondCard= card;
    
                    let secoundCardValue = card.getAttribute("data-card-value")
                    if(firstCardValue==secoundCardValue){
                    //   when both cards matched
    
                        firstCard.classList.add("matched")
                        secondCard.classList.add("matched")
    
                        firstCard= false;
    
                        // win count increment as user select correct match
    
                        winCount += 1;
    
                        if(winCount == Math.floor(cardValue.length/2)){
                            result.innerHTML =`<h2>You Won</h2>
                            <h4>Moves: ${movesCount}</h4> `
                             stopGame();
    
                        }
    
                    }
                    else{
                            // if the card matched
                            let [tempFirst, tempSecond]= [firstCard,secondCard]
                            firstCard= false;
                            secondCard=false;
    
                            let deley = setTimeout(()=>{
                                tempFirst.classList.remove("flipped");
                                tempSecond.classList.remove("flipped")
                            },900)
                    }
                }
            }
           
        })
    });
}
}

const initializar= ()=>{
    result.innerHTML = "";
    winCount= 0;
    let cardValue= generateRandom();
    console.log(cardValue);
    matrixGenerator(cardValue);
}
initializar();

startButton.addEventListener("click",()=>{
    movesCount=0;
    time= 0;
    controls.classList.add("hide");
    stopButton.classList.remove("hide")
    startButton.classList.add("hide")
    //  start timmer

    interval = setInterval(timeGenerator,1000)
    // intial moves

    moves.innerHTML=`<span> Moves:<span/> ${movesCount}`
    initializar()
})

//  stop game

stopButton.addEventListener("click",(stopGame)=>{
    controls.classList.remove("hide");
    stopButton.classList.add("hide")
    startButton.classList.hide("hide");
    clearInterval(interval)
})