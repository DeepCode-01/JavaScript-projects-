
const canvas = document.querySelector("canvas");
const toolButton = document.querySelectorAll(".tool");
const fillColor = document.querySelector("#fill-color");

const ctx = canvas.getContext("2d");

let prevMouseX, prevMouseY, snapshot,
    isDrawing = false,
    brushWidth = 5,
    selectedTool = "brush";

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
  const radius = Math.sqrt(Math.pow(prevMouseX - e.offsetX, 2) + Math.pow(prevMouseY - e.offsetY, 2));
  ctx.beginPath();
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
  
  if (!fillColor.checked) {
    ctx.stroke();
  } else {
    ctx.fill();
  }
};

const drawing = (e) => {
  if (!isDrawing) return;
  ctx.putImageData(snapshot, 0, 0); // Restore canvas to initial state
  
  if (selectedTool === "brush") {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  } else if (selectedTool === "rectangle") {
    drawRectangle(e);
  } else if (selectedTool === "circle") {
    drawCircle(e);
  }
};

const startDraw = (e) => {
  isDrawing = true;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;

  ctx.beginPath(); // Start a new path for drawing
  ctx.lineWidth = brushWidth;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height); // Save the current state of the canvas
};

toolButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
  });
});

canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
