let submitButton = document.getElementById("submit-btn");
let userInput = document.getElementById("user-input");

let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-btn");

let text = "";

// generate text
const textGenerator = () => {
  let generatedText = "";

  for (let i = 0; i < 3; i++) {
    // 65- 90 are capital letters
    generatedText += String.fromCharCode(randomNumber(65, 90));
    // 97-122 are small letters
    generatedText += String.fromCharCode(randomNumber(97, 122));

    //  48-57 are numbers from  0-9
    generatedText += String.fromCharCode(randomNumber(48, 57));
  }

  return generatedText;
};

// generate random number
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// canvas part

function drawStrtingOnCanvas(string) {
  let ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const textColor = ["rgb(0,0,0)", "rgb(130,130,130)"];
  // space between letters

  const letterSpace = 150 / string.length;

  for (let i = 0; i < string.length; i++) {
    const xInitialSpace = 25;

    ctx.font = "25px Roboto Mono";
    ctx.fillStyle = textColor[randomNumber(0, 1)];
    ctx.fillText(
      string[i],
      xInitialSpace + i * letterSpace,
      randomNumber(25, 40),
      100
    );
  }
}

const triggerFunction = () => {
  userInput.value = "";
  text = textGenerator();
//   console.log(text);
  text = [...text].sort(() => Math.random() - 0.5).join("");
  drawStrtingOnCanvas(text);
};

reloadButton.addEventListener("click", triggerFunction);
window.onload = () => triggerFunction();


submitButton.addEventListener("click", ()=>{
    if(userInput.value === text){
        alert("Success")
    }
    else{
        alert("Incorrect input")
        triggerFunction();
    }
})