//Challenge — Keep a Tooltip Inside the Viewport 

const boxEl = document.querySelector(".box");

document.addEventListener("mousemove", (e) => {
  // --------- EDGE DETECTION & MESSAGE ----------
  if (e.clientX < 20 && e.clientY < 20) {
    boxEl.textContent = "top left edge";
  } else if (e.clientX < 20 && e.clientY > innerHeight - 20) {
    boxEl.textContent = "bottom left edge";
  } else if (e.clientX > innerWidth - 20 && e.clientY < 20) {
    boxEl.textContent = "right top edge";
  } else if (e.clientX > innerWidth - 20 && e.clientY > innerHeight - 20) {
    boxEl.textContent = "bottom right edge";
  } else {
    boxEl.textContent = "";
  }

  // --------- LABEL SIZE ----------
  const rect = boxEl.getBoundingClientRect();

  // --------- DEFAULT POSITION (bottom-right of cursor) ----------
  let left = e.clientX + 10;
  let top = e.clientY + 10;

  // --------- RIGHT OVERFLOW ----------
  if (left + rect.width > window.innerWidth) {
    left = e.clientX - rect.width - 10;
  }

  // --------- BOTTOM OVERFLOW ----------
  if (top + rect.height > window.innerHeight) {
    top = e.clientY - rect.height - 10;
  }

  // --------- APPLY POSITION ----------
  boxEl.style.left = left + "px";
  boxEl.style.top = top + "px";
});
