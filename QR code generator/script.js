let imgBox = document.getElementById("img-box");
let QrImg = document.getElementById("QrImg");
let QrText = document.getElementById("QrText");

function generateQR() {
  if (QrText.value.length > 0) {
    QrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      QrText.value;

    imgBox.classList.add("show-img");

  } else {
    QrText.classList.add("error");
    
    setTimeout(() => {
      QrText.classList.remove("error");
    }, 1000);
  }
}
