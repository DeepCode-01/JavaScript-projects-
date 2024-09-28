let outputCode = document.getElementById("css-code");
let sliders = document.querySelectorAll("input[type='range']");
let inputs = document.querySelectorAll("input[type='number']");
let blob = document.getElementById("blob")
let copy = document.getElementById("copy")

const createBlob = () => {
  let radiusOne = sliders[0].value;
  let radiusTwo = sliders[1].value;
  let radiusThree = sliders[2].value;
  let radiusFour = sliders[3].value;

  let bolbHight = inputs[0].value;
  let bolbWidth = inputs[1].value;

  let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${
    100 - radiusThree
  }% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${
    100 - radiusFour
  }%`;

  blob.style.cssText = `border-radius: ${borderRadius}; height:${bolbHight}px; width:${bolbWidth}px`;

  outputCode.value = `border-radius: ${borderRadius};`

};

copy.addEventListener("click", ()=>{
    outputCode.select();
    document.execCommand("copy");
    alert("Code Copied")
})
createBlob()

sliders.forEach((sliders) => {
  sliders.addEventListener("input", createBlob);
});

inputs.forEach((inp) => {
  inp.addEventListener("change", createBlob);
});
