// Question: Replace all hyphens with slashes in "2025-09-15"

let str = "2025-09-15";
console.log(str.replace(/-/g, "/"));

/*
/-/g
/ → start of regex

- → literal hyphen character

/ → end of regex

g → global (replace all hyphens)
*/
