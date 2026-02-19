let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.trim() !== "") {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;

    qrImage.onload = () => {
      imgBox.classList.add("show-img");
    };

    qrImage.onerror = () => {
      alert("Failed to generate QR. Please try again.");
    };
  } else {
    qrText.classList.add("error");

    setTimeout(() => {
      qrText.classList.remove("error");
    }, 500);
  }
}
qrText.addEventListener("input", (e) => {
  if (e.target.value.length == 0) {
    qrImage.src = "";
    imgBox.classList.remove("show-img");
  }
});
