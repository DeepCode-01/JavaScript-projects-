const canvas = document.querySelector("canvas");
toolButton = document.querySelectorAll(".tool");

ctx = canvas.getContext("2d");

let prevMouseX, prevMouseY, snapShort;
isDrawing = false;
brushWidth = 5;
selectedTool = "brush";

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

const drawRectangle = (e) => {
  ctx.strokeRect(
    e.offsetX,
    e.offsetY,
    prevMouseX - e.offsetX,
    prevMouseY - e.offsetY
  );
};

const drawing = (e) => {
  if (!isDrawing) return;

  if (selectedTool === "brush") {
    // creating line according to the mouse pointer
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  } else if (selectedTool === "rectangle") {
    drawRectangle(e);
  }
};

const startDraw = (e) => {
  isDrawing = true;
  ctx.putImageData(snapShort, 0, 0);
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;
  // creating the new path
  ctx.beginPath();
  ctx.lineWidth = brushWidth;
  snapShort = ctx.getImageData(0, 0, canvas.width, canvas.height);
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
