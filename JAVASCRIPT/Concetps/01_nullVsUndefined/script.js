// rules for loose equality
// If one of the values is null and the other is a number → no conversion is performed.
console.log(null == 0);
console.log(null == "");
console.log(undefined == 0);
console.log(undefined == "");

console.log("\n");

//  In loose equality (==), undefined is not coerced to number, string, or boolean. It is only equal to null.

console.log(null == undefined);
console.log(null === undefined);
console.log("\n");

console.log(null > 0); // typed corced
console.log(null == 0); // false ( in this not typed coreced)
console.log(null >= 0); // true (null corcred to number as 0)

console.log("\n");

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
