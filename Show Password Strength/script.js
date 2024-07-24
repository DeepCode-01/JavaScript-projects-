let pass = document.getElementById("password");
let msg = document.getElementById("message");
let strenght= document.getElementById("Strength");

pass.addEventListener("input",()=>{
    if(pass.value.length >0){
        msg.style.display= "block"
    }
    else{
        msg.style.display= "none"
    }
    if(pass.value.length < 4){
        strenght.innerHTML = "weak!";
        pass.style.borderColor = "#ff5925"
        msg.style.color = "#ff5925"
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        strenght.innerHTML = "medium!";
         pass.style.borderColor = "yellow"
        msg.style.color = "yellow"
    }
    else if(pass.value.length >= 8){
        strenght.innerHTML = "strong!";
         pass.style.borderColor = "#27d730"
        msg.style.color = "#27d730"
    }
})