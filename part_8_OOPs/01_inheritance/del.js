let max = [1, 2, 3].reduce(
  (acc, currEle) => (currEle > acc ? currEle : acc),
  0
);
console.log(max);
