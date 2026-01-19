// 💡 Analogy:

// var → one global mailbox → keeps getting updated → final value 4

// let → separate mailbox per iteration → disappears after the block

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

/*

let var;

for ( i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000)
}
*/
