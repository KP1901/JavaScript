// Challenge — 
// Hide Navbar When Scrolling Down
// show navbar when scrolling UP

let navBar = document.getElementById("navBar");

let lastScroll = 0;
document.addEventListener("scroll", (e) => {
  let currScroll = window.scrollY;

  if (currScroll > lastScroll) {
    navBar.style.transform = "translateY(-100px)";
  } else {
    navBar.style.transform = "translateY(0)";
  }
  lastScroll = currScroll;
});
