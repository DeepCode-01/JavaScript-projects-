const questions = [
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Seoul", correct: false },
      { text: "Bangkok", correct: false },
    ],
  },
  {
    question: "Which river is the longest in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Mississippi", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
    ],
  },
  {
    question: "What animal is the national symbol of Australia?",
    answers: [
      { text: "Kangaroo", correct: true },
      { text: "Koala", correct: false },
      { text: "Emu", correct: false },
      { text: "Crocodile", correct: false },
    ],
  },
  {
    question: "Which is the largest island?",
    answers: [
      { text: "New Guinea", correct: false },
      { text: "Andaman Nicobar", correct: false },
      { text: "Greenland", correct: true },
      { text: "Hawaii", correct: false },
    ],
  },

  {
    question: " Which is the richest country in the world",
    answers: [
      { text: "Qatar", correct: true },
      { text: "Russia", correct: false },
      { text: "The USA", correct: false },
      { text: "The UAE", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add(".btn");
    answerButtons.appendChild(button);
  });
}

function resetState() {

    nextButton.style.display= "none"

    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
startQuiz();
