let coloOne = document.getElementById("color-a");
let coloTwo = document.getElementById("color-b");

let currentDirection = "to bottom";
let outPut = document.getElementById("code");

const setDirection = (value, _this) => {
  let directions = document.querySelectorAll(".buttons button");

  for (let i of directions) {
    i.classList.remove("active");
  }
  _this.classList.add("active");
  currentDirection = value;
  console.log(currentDirection);
};

const generateCode = () => {
  outPut.value = `background-image: linear-gradient(${currentDirection},${coloOne.value}, ${coloTwo.value})`;

  document.getElementsByTagName(
    "BODY"
  )[0].style.backgroundImage = `linear-gradient(${currentDirection},${coloOne.value}, ${coloTwo.value})`;
};

const copyCode = ()=>{
    outPut.select();
    document.execCommand("copy");
    alert("Gradient Code Copied!")
}

generateCode();