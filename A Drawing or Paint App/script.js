const canvas = document.querySelector("canvas");
const toolButton = document.querySelectorAll(".tool");
const fillColor = document.querySelector("#fill-color");
const sizeSlider = document.querySelector("#size-slider");
const colorBtn = document.querySelectorAll(".colors .option");
const colorPicker = document.querySelector("#color-picker");
const clearCanva = document.querySelector(".clear-canvas");
const saveImg = document.querySelector(".save-img");

const ctx = canvas.getContext("2d");

// default values
let prevMouseX,
  prevMouseY,
  snapshot,
  isDrawing = false,
  brushWidth = 5,
  selectedTool = "brush",
  selectedColor = "#000";

//  for download img background
  const setCanvaBackground = ()=>{
    ctx.fillStyle = "#fff"
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = selectedColor
  }

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

const drawRectangle = (e) => {
  ctx.putImageData(snapshot, 0, 0); // Restore saved state before drawing
  const width = e.offsetX - prevMouseX;
  const height = e.offsetY - prevMouseY;

  if (!fillColor.checked) {
    ctx.strokeRect(prevMouseX, prevMouseY, width, height);
  } else {
    ctx.fillRect(prevMouseX, prevMouseY, width, height);
  }
};

const drawCircle = (e) => {
  ctx.putImageData(snapshot, 0, 0); // Restore saved state before drawing
  const radius = Math.sqrt(
    Math.pow(prevMouseX - e.offsetX, 2) + Math.pow(prevMouseY - e.offsetY, 2)
  );
  ctx.beginPath();
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);

  if (!fillColor.checked) {
    ctx.stroke();
  } else {
    ctx.fill();
  }
};

const drawTriangle = (e) => {
  // creating new path
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
  ctx.closePath();
  ctx.stroke();

  if (!fillColor.checked) {
    ctx.stroke();
  } else {
    ctx.fill();
  }
};

const drawing = (e) => {
  if (!isDrawing) return;
  ctx.putImageData(snapshot, 0, 0); // Restore canvas to initial state

  if (selectedTool === "brush" || selectedTool === "eraser") {
    ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  } else if (selectedTool === "rectangle") {
    drawRectangle(e);
  } else if (selectedTool === "circle") {
    drawCircle(e);
  } else {
    drawTriangle(e);
  }
};

const startDraw = (e) => {
  isDrawing = true;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;

  ctx.beginPath(); // Start a new path for drawing
  ctx.lineWidth = brushWidth;
  ctx.strokeStyle = selectedColor;
  ctx.fillStyle = selectedColor;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height); // Save the current state of the canvas
};

toolButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
  });
});

sizeSlider.addEventListener("change", () => (brushWidth = sizeSlider.value));

// for choose color from displayed color
colorBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .selected").classList.remove("selected");
    btn.classList.add("selected");
    selectedColor = window
      .getComputedStyle(btn)
      .getPropertyValue("background-color");
  });
});

// for choose colors from color picker
colorPicker.addEventListener("change", () => {
  colorPicker.parentElement.style.backgroundColor = colorPicker.value;
  colorPicker.parentElement.click();
});

// for clearing whole canvas
clearCanva.addEventListener("click", ()=>{
  ctx.clearRect(0,0, canvas.width, canvas.height)
  setCanvaBackground();
})

saveImg.addEventListener("click", ()=>{
  const link = document.createElement("a")
  link.download= `${Date.now()}.jpg`
  link.href = canvas.toDataURL();
  link.click();
})


canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
