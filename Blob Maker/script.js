let outputCode = document.getElementById("css-code");
let sliders = document.querySelectorAll("input[type='range']")
let inputs = document.querySelectorAll("input[type='number']")
 
sliders.forEach(function(){
    sliders.addEventlistener("input", createBlob)
})