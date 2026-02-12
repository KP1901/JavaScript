  function createFunction() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
      arr.push(function () {
        console.log(i);
      });
    }

    return arr;
  }
  let funcs = createFunction();
  funcs[0]();
  funcs[1]();
  funcs[2]();
  console.log(funcs);
