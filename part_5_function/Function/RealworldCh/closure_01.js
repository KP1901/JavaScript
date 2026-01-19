// way 1 - using closure

function createDownloadTracker(fileName) {
  let count = 0;
  function download() {
    ++count;
    console.log(`${fileName} downloaded ${count} times`);
  }
  function reset() {
    count = 0;
    console.log(`${fileName} file is reseted`);
  }
  return { download, reset };
}
const pdfTracker = createDownloadTracker("report.pdf");
pdfTracker.download();
pdfTracker.download();
pdfTracker.download();
pdfTracker.reset();
pdfTracker.download();

/*
🧠 Explanation:

-Here count is private — not accessible outside.
-download() and reset() form a closure over count.
-Each call to createDownloadTracker() creates a new lexical environment, giving every file its own independent count.
-This is exactly what the challenge asked for.

*/

/*

// object literal not closure


const createDownloadTracker = {
  count: 0,
  download: function (fileName) {
    ++this.count;
    console.log(`${fileName} downloaded ${this.count} times`);
  },
  reset: function (fileName) {
    this.count = 0;
    console.log(`${fileName} file is reseted`);
  },
};
createDownloadTracker.download("Report.pdf");
createDownloadTracker.download("Report.pdf");
createDownloadTracker.reset("Report.pdf");
createDownloadTracker.download("Report.pdf");
createDownloadTracker.download("Image.jpg");
*/

/*
🚫 Problems with this way:

1.There’s only one shared count for all files.
2.If you download two different files, both share the same counter.
3.There’s no closure, because count lives directly on the object, not in a function’s private scope.
*/
