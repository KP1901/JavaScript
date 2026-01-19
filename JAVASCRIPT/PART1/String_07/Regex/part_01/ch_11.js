let str = "hello world";
console.log(str.replace(/\b\w/g, (char) => char.toUpperCase()));
//

/*

 There IS a boundary after o, but \b\w needs a word character after the boundary — which doesn’t exist there.

Position   \b ?   \w ?
|h         ✅     h  (match)
h|e        ❌     —
e|l        ❌     —
l|l        ❌     —
l|o        ❌     —
o|␠        ✅     ❌
␠|w        ✅     w  (match)

*/
