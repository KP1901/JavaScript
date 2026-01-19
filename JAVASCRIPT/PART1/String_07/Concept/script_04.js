// 1.🔹 indexOf(substring, fromIndex) check from left

let nb = "javaScript";
console.log(nb.indexOf("Script"));
console.log(nb.indexOf("a"));
console.log(nb.indexOf("a", 2));
console.log(nb.indexOf("a", 8)); // returns -1 if not found
console.log();

/*
Meaning:

"a" → what to search
2 → starting index
Search goes from index 2 → end
*/

// 2. 🔹 lastIndexOf(substring, fromIndex) check from right

console.log(nb.lastIndexOf("a"));
console.log(nb.lastIndexOf("a", 0));
console.log(nb.lastIndexOf("a", 2));

/*
Meaning:

"a" → what to search
2 → starting index
Search goes from index 2 → 0
*/

/*
| Feature             | `indexOf()`         | `lastIndexOf()`  |
| ------------------  | -----------------   | ---------------- |
| Direction           | Left → Right        | Right → Left     |
| Default start       | 0                   | End of string    |
| Return value        | First match index   | Last match index |
| Not found           | -1                  | -1               |
| Case-sensitive      | ✅ Yes               | ✅ Yes            |
| Creates new string  | ❌ No                | ❌ No             |


*/
