let coloOne = document.getElementById("color-a");
let coloTwo= document.getElementById("color-b");

let currentDirection = "to bottom"
let outPut = document.getElementById("code")

const setDirection = (value,_this)=>{
  let directions = document.querySelectorAll(".buttons botton")
  console.log(directions)
  
  for(let i of directions){
    i.classList.remove("active")
  }
  _this.classList.add("active")
}