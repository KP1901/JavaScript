// Normal Functions with Default Parameters

function greet(name = "Guest") {
  console.log("Hello " + name + "!");
}
greet(); // print default
greet("kiran"); // override default

// Example 2: Adding Numbers with Default Value

function addNumbers(a = 10, b = 20) {
  console.log(a + b);
}
addNumbers(30, 50);
addNumbers(30);
addNumbers();

// Example 3: Welcome Message

function welcomeUser(firstName = "User", lastName = "") {
  console.log(firstName + " " + lastName);
}
welcomeUser("Kiran", "Patodekar");
welcomeUser("Kiran");
welcomeUser();

/*
✅ Key Points:

-Default parameters allow functions to handle missing arguments.
-Prevents undefined and makes code cleaner.
-Works with any normal function.
*/