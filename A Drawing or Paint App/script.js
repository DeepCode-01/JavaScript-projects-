const canvas = document.querySelector("canvas");
toolButton = document.querySelectorAll(".tool");

ctx = canvas.getContext("2d");
let isDrawing = false;
brushWidth = 5;
selectedTool = "brush";

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

const drawing = (e) => {
  if (!isDrawing) return;

  if (selectedTool == "brush") {
    // creating line according to the mouse pointer
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
};

const startDraw = () => {
  isDrawing = true;
  // creating the new path
  ctx.beginPath();
  ctx.lineWidth = brushWidth;
};

toolButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
    console.log(selectedTool);
  });
});

canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
