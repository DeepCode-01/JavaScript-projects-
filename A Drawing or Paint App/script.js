const canvas = document.querySelector("canvas");
toolButton = document.querySelectorAll(".tool");
fillColor = document.querySelector("#fill-color");

ctx = canvas.getContext("2d");

let prevMouseX, prevMouseY, snapshot;
isDrawing = false;
brushWidth = 5;
selectedTool = "brush";

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

const drawRectangle = (e) => {
  if (!fillColor.checked) {
    return ctx.strokeRect(
      e.offsetX,
      e.offsetY,
      prevMouseX - e.offsetX,
      prevMouseY - e.offsetY
    );
  }
  ctx.fillRect(
    e.offsetX,
    e.offsetY,
    prevMouseX - e.offsetX,
    prevMouseY - e.offsetY
  );
};

const drawCircle = (e) => {
  ctx.arc(prevMouseX, prevMouseY, 50, 0, 2 * Math.PI);
  ctx.stroke(e)
};

const drawing = (e) => {
  if (!isDrawing) return;

  if (selectedTool === "brush") {
    // creating line according to the mouse pointer
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  } else if (selectedTool === "rectangle") {
    drawRectangle(e);
  } else if (selectedTool === "circle") {
    drawCircle();
  }
};

const startDraw = (e) => {
  isDrawing = true;
  ctx.putImageData(snapshot, 0, 0);
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;
  // creating the new path
  ctx.beginPath();
  ctx.lineWidth = brushWidth;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
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
