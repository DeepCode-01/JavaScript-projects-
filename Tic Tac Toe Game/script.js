let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

//winning patterns
let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));

  popupRef.classList.remove("hide");
};

// Enable buttons and hide the popup
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerHTML = "";
    element.disabled = false;
  });
  popupRef.classList.add("hide");
};

newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

// Executed after winning
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1f389; <br> 'X' Wins!";
  } else {
    msgRef.innerHTML = "&#x1f389; <br> 'O' Wins!";
  }
};

// For Draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1f60E; <br> It's a Draw!";
};

// Win logic
const winnerChecker = () => {
  for (let pattern of winningPattern) {
    let [index1, index2, index3] = pattern;
    let element1 = btnRef[index1].innerHTML;
    let element2 = btnRef[index2].innerHTML;
    let element3 = btnRef[index3].innerHTML;

    // Check if all cells are filled with the same value and not empty
    if (element1 !== "" && element1 === element2 && element2 === element3) {
      winFunction(element1);
      return;
    }
  }
};

let xTurn = true;
let count = 0;

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      element.innerHTML = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      element.innerHTML = "O";
      element.disabled = true;
    }

    count += 1;

    // Check for draw if all cells are filled
    if (count === 9) {
      drawFunction();
    }
    winnerChecker();
  });
});

window.onload = enableButtons;
