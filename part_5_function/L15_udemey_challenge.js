// 4.

function makeTea(typeofTea) {
  return `makeTea : ${typeofTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

console.log(processTeaOrder(makeTea));

// 5.

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}
const teamaker = createTeaMaker();
console.log(teamaker("green tea"));
