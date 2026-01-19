function limitClicks(maxClicks) {
  let clicks = 0;
  function click() {
    if (clicks < maxClicks) {
      clicks++;
      console.log("click " + clicks);
    }
  }
  return click;
}

const buttonClick = limitClicks(3);
buttonClick();
buttonClick();
buttonClick();
buttonClick();
buttonClick();
