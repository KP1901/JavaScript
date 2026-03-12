
// challenge : make cursor magnetic when it reaches to button


const btn = document.querySelector(".btn");

btn.addEventListener("mousemove", (e) => {
  let btnRect = btn.getBoundingClientRect();

  let cursorX = e.clientX;
  let cursorY = e.clientY;

  let centerX = btnRect.left + btnRect.width / 2;
  let centerY = btnRect.top + btnRect.height / 2;

  let distanceX = cursorX - centerX;
  let distanceY = cursorY - centerY;

  let moveX = distanceX * 0.3;
  let moveY = distanceY * 0.3;

  btn.style.transform = `translate(${moveX}px,${moveY}px)`;
});
