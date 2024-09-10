let operators = ["+", "-", "*"];
const startBtn = document.getElementById("start-btn");
const Questions = document.getElementById("questions");

const controls = document.querySelector(".control-container");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const errorMassage = document.getElementById("error-msg");

let answerValue;
let operatorQuestions;

// Random value generator
const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const questionsGenerator = () => {
  let [num1, num2] = [randomValue(1, 20), randomValue(1, 20)];
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];

 
  if (randomOperator == "-" && num1 < num2) {
    [num1, num2] = [num2, num1];
  }

  // Solve the equation
  let solution = eval(`${num1} ${randomOperator} ${num2}`);

  let randomVar = randomValue(1, 5);
  if (randomVar == 1) {
    answerValue = num1;
    Questions.innerHTML = `<input type="number" id="input-val" placeholder="?"/> ${randomOperator} ${num2} = ${solution}`;
  } else if (randomVar == 2) {
    answerValue = num2;
    Questions.innerHTML = `${num1} ${randomOperator} <input type="number" id="input-val" placeholder="?"/> = ${solution}`;
  } else if (randomVar == 3) {
    answerValue = randomOperator;
    operatorQuestions = true;
    Questions.innerHTML = `${num1} <input type="text" id="input-val" placeholder="?"/> ${num2} = ${solution}`;
  } else {
    answerValue = solution;
    Questions.innerHTML = `${num1} ${randomOperator} ${num2} = <input type="number" id="input-val" placeholder="?"/>`;
  }
};

// user input

submitBtn.addEventListener("click", () => {
  errorMassage.classList.add("hide");
  let userInput = document.getElementById("input-val").value;

  if (userInput) {
    if (userInput == answerValue) {
      stopGame(`Yippie!! <span>Correct</span> Answer`);
    } else if (operatorQuestions && !operators.includes(userInput)) {
      errorMassage.classList.remove("hide");
      errorMassage.innerHTML = "Please enter a valid operator";
    } else {
      stopGame(`Opps!! <span>Wrong</span> Answer`);
    }
  } else {
    errorMassage.classList.remove("hide");
    errorMassage.innerHTML = "Input can't be empty";
  }
});

// Start game
startBtn.addEventListener("click", () => {
  operatorQuestions = false;
  answerValue = "";
  errorMassage.innerHTML = "";
  errorMassage.classList.add("hide");
 
  controls.classList.add("hide");
  startBtn.classList.add("hide");
  questionsGenerator();

});

const stopGame = (resultText) => {
  result.innerHTML = resultText;
  startBtn.innerText = "Restart";
  controls.classList.remove("hide");
  startBtn.classList.remove("hide");
};
