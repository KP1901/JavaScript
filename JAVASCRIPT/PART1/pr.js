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
