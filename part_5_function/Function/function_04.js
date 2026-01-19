// 4️⃣ Normal Functions with Rest Parameters

// Example 1: Sum of Any Numbers

function getNumbers(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

getNumbers(10, 20);
/*
numbers is an array numbers = [10,20]

*/

// Example 2: Sum of Any Numbers

function sumAll(...numbers) {
  let sum = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     sum = sum + numbers[i];
  //   }

  for (let num of numbers) {
    sum += num;
  }
  console.log(sum);
}
sumAll(10, 20, 30);
sumAll(10, 20, 30, 60);

// Example 2: Rest Parameters with Normal Parameters

function greetAll(greeting, ...names) {
  for (let name of names) {
    console.log(greeting + " " + name);
  }
}
greetAll("Hello", "Kiran", "Ajay", "Ajit");

/*
✅ Key Points:

-Rest parameter (...) lets you collect unlimited arguments into an array.

-Only one rest parameter is allowed per function.

-Must always be the last parameter in the function.

-Makes functions flexible and reusable for multiple inputs.
*/
