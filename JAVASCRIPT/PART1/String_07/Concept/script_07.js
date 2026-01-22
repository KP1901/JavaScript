// 🔹 2. String.prototype.matchAll() (ES2020+)

/*
Syntax
str.matchAll(regex)

⚠️ Regex MUST have g flag
*/
let s = "I have 2 apples and 3 bananas";

for (const match of s.matchAll(/\d+/g)) {
  console.log(match);
}

/*
What matchAll() gives you

✔ All matches
✔ Index of each match
✔ Groups
✔ No loss of info

📌 matchAll = best of both worlds
Convert matchAll() to array 

-it returns an itereator so must used for..of..loop
*/

// -------------------------------groups-------------------------

//  with match

let res = vk.match(/(\d{4})-(\d{2})-(\d{2})/);
console.log(res);

console.log(res[0]);
console.log(res[1]);
console.log(res[2]);
console.log(res[3]);
console.log();

//  with matchAll

let dk = "2025-09-15 2026-10-20";

for (const match of dk.matchAll(/(\d{4})-(\d{2})-(\d{2})/g)) {
  console.log(match[0]);
  console.log(match[1]);
  console.log(match[2]);
}

/*
| Feature              | `match()`                                 | `matchAll()`                           |
| -------------------- | ----------------------------------------- | -------------------------------------- |
| Purpose              | Find matches in a string                  | Find **all** matches with full details |
| Regex required       | Optional                                  | **Must use regex with `g` flag**       |
| Behavior without `g` | Returns **first match + details**         | ❌ Not allowed                          |
| Behavior with `g`    | Returns **array of matched strings only** | Returns **iterator of match objects**  |
| Index information    | ❌ Lost when `g` is used                   | ✅ Always available                     |
| Capture groups       | ❌ Lost when `g` is used                   | ✅ Always available                     |
| Return type          | `Array` or `null`                         | `Iterator` (convertible to array)      |
| Overlapping matches  | ❌ No                                      | ❌ No                                   |
| Best use case        | Simple search                             | Complex parsing / extraction           |


match() is simple but loses details; matchAll() is modern and preserves everything.
When the regex has g flag, match() loses capture groups, index, and extra info for each repeated match.
*/
