// 1. basic example

let day = 3;

switch (day) {
  case 0:
    console.log("Monday");
    break;
  case 1:
    console.log("Tuesday");
    break;
  case 2:
    console.log("Wednesday");
    break;
  case 3:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid");
}

// 2 . grouping cases
// You can let multiple cases share the same

let fruit = "apple";

switch (fruit) {
  case "apple":
  case "banana":
    console.log(`fruit is ${fruit}`);
    break;
  default:
    console.log("invalid");
}

// 3 swtich with expression

let x = 5;
let y = 10;
switch (x + y) {
  case 15:
    console.log(`${x}+${y}=${x + y}`);
    break;
  default:
    console.log("invalid");
}

// true use case (go inside switch always)

let marks = 80;
switch (true) {
  case marks >= 90:
    console.log("Grade A");
    break;
  case marks >= 75:
    console.log("Grade B");
    break;
  default:
    console.log("fail");
}

// nested switch
let stream = "Science";
let year = 2;

switch (stream) {
  case "Science":
    switch (year) {
      case 1:
        console.log("Subjects: Physics, Chemistry, Mathematics");
      case 2:
        console.log("Subjects: Botany, Zoology, Biochemistry");
      default:
        console.log("Invalid year for Science stream");
    }
  case "Arts":
    switch (year) {
      case 1:
        console.log("Subjects: Accounting, Business Studies");
      case 2:
        console.log("Subjects: Auditing, Financial Management");
      default:
        console.log("Invalid year for Commerce stream");
    }
  default:
    console.log("Invalid stream selected");
}

// how to interact with object

// 🟢 1. Using switch on an Object Property

let user = {
  name: "Alice",
  role: "admin",
};

switch (user.role) {
  case "admin":
    console.log("has full access");
    break;
  case "editor":
    console.log("can edit content");
    break;
  case "view":
    console.log("can only view");
    break;
}

// 🟡 2. Switching Between Different Object Keys

// You can switch on which property is being checked.

let settings = {
  theme: "dark",
  notifications: true,
  language: "en",
};
let option = "notification";

switch (option) {
  case "theme":
    console.log("Theme is : ", settings.theme);
    break;
  case "notifications":
    console.log("Notification is : ", settings.notifications);
    break;
  default:
    console.log("invalid");
}
// 🟠 3. Using switch Inside an Object Method

// An object can contain a method that uses switch for decision-making.

let calculator = {
  operation: function (a, b, op) {
    switch (op) {
      case "add":
        return a + b;
      case "sub":
        return a - b;
      case "mul":
        return a * b;
      case "div":
        return a / b;
      default:
        return "invalid";
    }
  },
};
console.log(calculator.operation(10, 20, "add"));

// 🔵 4. Object Values as Case Matches

// Sometimes an object holds the "possible case values."

const commands = {
  start: "Start",
  stop: "stop",
  pause: "pause",
};
let input = "Start";

switch (input.toLowerCase()) {
  case commands.start.toLowerCase():
    console.log("System starting");
    break;
  case commands.stop.toLowerCase():
    console.log("System stopped");
    break;
  case commands.pause.toLowerCase():
    console.log("System paused");
    break;
  default:
    console.log("invalid");
}
// 🟣 5. Replacing Switch with an Object Lookup (Advanced Trick)

// 👉 Instead of switch, sometimes objects themselves can replace switch.
/*
✅ In short:
An object lookup is called a dynamic switch because instead of the interpreter checking cases one by one, you directly look up the matching function using the object key and execute it — making the code shorter, faster, and extendable.
*/

let calculate = {
  add: (a, b) => {
    return a + b;
  },
  sun: (a, b) => {
    return a - b;
  },
  mul: (a, b) => {
    return a * b;
  },
  div: (a, b) => {
    return a / b;
  },
};
console.log(calculate.add(a, b));
