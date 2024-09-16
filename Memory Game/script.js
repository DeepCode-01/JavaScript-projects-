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
    {name: "bee", image:"/bee.png"}
]