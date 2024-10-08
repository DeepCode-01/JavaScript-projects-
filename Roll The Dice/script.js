let image = [
  "dice_1.png",
  "dice_2.png",
  "dice-3.png",
  "dice-4.png",
  "dice-5.png",
  "dice-6.png",
];

let dice = document.querySelectorAll("img");
let total = document.getElementById("total");

const rollDice = () => {
  dice.forEach((die) => {
    die.classList.add("shake");
  });

  setTimeout(() => {
    dice.forEach((die) => {
      die.classList.remove("shake");
    });

    let diceOneValue = Math.floor(Math.random() * 6);
    let diceTwoValue = Math.floor(Math.random() * 6);

    document.querySelector("#dice-1").setAttribute("src", image[diceOneValue]);
    document.querySelector("#dice-2").setAttribute("src", image[diceTwoValue]);

    total.innerHTML = "Your Roll Is "  + ((diceOneValue + 1 ) + (diceTwoValue + 1));
  }, 1000);
};
