let str = "hello";
console.log(str.match(/^[a-z]+/));

/*
/ → start of regex

^ → start of string

[ → start of character set

a-z → any lowercase letter from a to z

] → end of character set

/ → end of regex

g → global search (though here only one match possible because of ^)
*/