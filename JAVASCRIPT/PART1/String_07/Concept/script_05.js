// 3️⃣ Modify / Transform Methods

// 1🔹 toUpperCase() / toLowerCase()
console.log("HI".toLowerCase());
console.log("hi".toUpperCase());

// 2. trim() => remove left and right whitespace
let a = "   v   ";
console.log(a.length);
console.log(a.trim().length);

//3. trimStart() and trimEnd()

console.log(a.length);
console.log(a.trimStart());
console.log(a.length);
console.log(a.trimEnd());
console.log();

//4. padStart(targetLength, padString) (total length , padding(includes total length))

let number = "1234";
console.log(number.padStart(12, "x"));

let vk = "5";
console.log(vk.padStart(3, "0"));
console.log(vk.padStart(5, "*"));

console.log(vk.padEnd(3, "0"));
console.log(vk.padEnd(5, "#"));

// 5 . 🔹 repeat(count)

let j = "ha";
console.log(j.repeat(3));
console.log();

// 6 🔹 replace(search, replacement) works only on first occurrence

//jajaja
console.log(k.replace("aja", "jaj"));

// 7 🔹 replaceALL(search, replacement) works  on every occurrence

let d = "ajaaja"; //jajjaj
console.log(d.replaceAll("aja", "jaj"));

// /4️⃣ Split / Combine

// 1.🔹 split(separator, limit)

let aj = "Hi my name is kiran";
console.log(aj.split(" "));

// 2. 🔹 concat()
let av = "hi";
console.log(av.concat(" kiran"));

// 3 .join()
let abv = ["a", "b", "c"];
console.log(abv.join(""));
console.log();

// 5️⃣ Comparison / Locale

// compare two strings alphabetically (lexicographically)
console.log("a".localeCompare("b")); // current string (a) comes before compared one
console.log("b".localeCompare("b")); // both strings are equal
console.log("b".localeCompare("a")); // current string (b) comes after compared one.

//localeCompare returns: negative → before, 0 → equal, positive → after

// normalize()=> "Same letters" that are not actually the same

let a1 = "e\u0301"; // 'e' + combining acute accent
let b1 = "é"; // single precomposed character
console.log(a1);
console.log(b1);
console.log(a1 === b1);
console.log(a1.normalize() === b1.normalize());
console.log();

/*
✅ Exactly! Perfect summary.

You’ve got it — the normalize() method is used when two characters (or strings) look identical to humans but are encoded differently in Unicode (i.e., they have different underlying code points).

It converts them into a consistent, standardized form, so that comparisons, sorting, and text processing work correctly.

-The String.prototype.normalize() method converts a string into a standard Unicode form — so that equivalent characters have a consistent binary representation.

*/
