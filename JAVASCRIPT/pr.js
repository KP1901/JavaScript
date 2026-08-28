const contentEl = document.getElementById("content");

function handlePage(input) {
  if (input == "home") {
    contentEl.innerHTML = "<h1>home</h1>";
  } else if (input == "about") {
    contentEl.innerHTML = "<h1>About</h1>";
  }
}
