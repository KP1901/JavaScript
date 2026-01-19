// 🧠 Challenge 1 — Find Max Score

const scores = [78, 92, 85, 99, 67];

function findMax(...scores) {
  let max = scores[0];
  for (let score of scores) {
    if (max < score) {
      max = score;
    }
  }
  console.log(max);
}

findMax.apply(null, scores);

// ⚙️ Challenge 2 — Merge and Sort Lists

function sortProduct() {
  const items = Array.prototype.slice.call(arguments);
  console.log(items.sort());
}

const list1 = ["keyboard", "mouse"];
const list2 = ["monitor", "cable"];

sortProduct.apply(null, list1.concat(list2));

/*
Array.prototype.slice is a method that we borrow from arrays and call on arguments, which is an array-like object.

When we do .call(arguments), we’re explicitly setting the this value inside slice() to be the arguments object — that’s how slice() knows which elements to copy.
*/
