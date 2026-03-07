/*
1. Mouse Event Position Properties

These tell where the mouse pointer is when an event happens.

1️⃣ event.clientX / event.clientY

Position inside the visible browser window (viewport).
*/

document.addEventListener("click", (e) => {
  console.log(e.pageY);
});

/*
  e.clientX => show horizontal position inside browser viewport
  e.clientY => show vertical position inside browser viewport
  innerWidth => actual browser viewport width
  innerHeight => actual browser viewport height
  screen.width => actual width of System (resolution)
  screen.height => actual height of System  (resolution)
  screen.availWidth => actual width of UI excluded System UI (taskbar)
  screen.availHeight => actual height of UI excluded System UI (taskbar)
 */
