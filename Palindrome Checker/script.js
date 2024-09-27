let btn = document.getElementById("btn");
let inpText = document.getElementById("input-text");

const checkWord = () => {
  let text = inpText.value;
  checkPalindrome(text);
};

const checkPalindrome = (text) => {
  let newText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let len = newText.length;
  let halfLen = Math.floor(len / 2);
  let result = document.getElementById("result");
  let i;
  for (i = 0; i < halfLen; i++) {
    if (newText[i] !== newText[len - 1 - i]) {
      result.textContent = `Nope! not a palindrome`;
      return;
    } else {
      result.textContent=`Yess! it's a palindrome`;
    }
  }
};

btn.addEventListener("click", checkWord);
