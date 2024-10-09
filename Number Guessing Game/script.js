let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");
let guess = document.getElementById("gussedNum");
let btn = document.getElementById("btn")

let answer = Math.floor(Math.random() * 100) + 1;
let no_of_gueeses = 0;
let gussed_num = [];

const play = () => {
  user_gusses = guess.value;
  if (user_gusses < 1 || user_gusses > 100) {

    alert("Please enter number between 1-100");
  }
   else {
    gussed_num.push(user_gusses);
    no_of_gueeses += 1;

    if (user_gusses < answer) {
      msg1.textContent = "Your gussed number is too low.";
      msg2.textContent = "No. of gusses : " + no_of_gueeses;
      msg3.textContent = "Gussed numbers are : " + gussed_num;
    } 
    
    else if (user_gusses > answer) {

        msg1.textContent = "Your gussed number is too high.";
        msg2.textContent = "No. of gusses : " + no_of_gueeses;
        msg3.textContent = "Gussed numbers are : " + gussed_num;
    }
    else if (user_gusses == answer){
        msg1.textContent = "Yippiee! You win.You gussed it right 🎉"
        msg2.textContent= "The number was:" + answer   
        msg3.textContent = "You gussed it in: "+ no_of_gueeses + " gusses" 
        btn.disabled = true;
    }
  }
};
