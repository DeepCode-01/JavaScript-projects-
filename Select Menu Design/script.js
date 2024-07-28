const selectField = document.getElementById("selectField");
const selectText  = document.getElementById("selectText");
const options = document.getElementsByClassName(".options");
const list = document.getElementById("list")
const arrowIcon =  document.getElementById("arrowIcon")


selectField.onclick= function(){
  list.classList.toggle("hide")
  arrowIcon.classList.toggle("rotate")
}

for (let option of options) { 
    option.onclick = function() {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}