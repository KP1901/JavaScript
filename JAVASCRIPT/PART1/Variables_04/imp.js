var age;
console.log(age);
age = 40;
console.log(age);

/*

Global Lexical Environment (LE)

Environment Record:
age -> undefined
console -> { log: function }

Outer Reference -> null

Code Execution Phase (Global)

age -> undefined
console.log(age) -> undefined

age = 40

console.log(age) -> 40

Final Output:
undefined
40

*/