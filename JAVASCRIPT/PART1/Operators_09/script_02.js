let age = 19;
let result = age < 18 ? "age is less than 18" : "age is greater than 18";
console.log(result);

// bitwise operator

// 1.and(&)
console.log(7 & 5);

// 7 ->  0111
// 5 ->  0101
//   ->  0101 = 5


// 2. or (|)

console.log(5 | 3);

// 5 -> 0101
// 3 -> 0011
//  0111 = 7

// 3 xor(^)

console.log(5 ^ 3);

// 5 -> 0101
// 3 -> 0011
//   ->0110 = 6

// 4 Not(~)

console.log(~9);
console.log(~-9);

// -(x+1 ) => -(9+1) => -10
// -((-x)+1) => -(-9+1) => 8

// 5 left shift operator

console.log(5 << 2);

//  5     =>    0101
// 5<<2   =>  0101--
//   = 16 + 4 = 20

console.log(5 >> 2); // loose last two bit

//  5     =>    0101
// 5<<2   =>      01
//   = 16 + 4 = 20
