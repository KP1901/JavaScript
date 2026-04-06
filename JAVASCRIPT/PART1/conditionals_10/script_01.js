// 1 .if

let age = 30;

if (age > 20) {
  console.log("+18");
}

// 1 .if_else

let score = 20;

if (score > 20) {
  console.log("+18");
} else {
  console.log("not +18");
}

// 2 .if else if ladder

let marks = 100;

if (makrs >= 90) {
  console.log("first class");
} else if (marks >= 70) {
  console.log("Second class");
} else if (makrs >= 60) {
  console.log("Third class");
} else {
  console.log("Failed");
}

// 3.nested if_ else

let personAge = 20;
let haveRc = true;
let haveLicense = true;

if (personAge >= 18) {
  if (haveRc) {
    if (haveLicense) {
      console.log("congrauts you have all document");
    } else {
      console.log("dont have licenese");
    }
  } else {
    console.log("you dont have rc book");
  }
} else {
  console.log("your are not 18+");
}
