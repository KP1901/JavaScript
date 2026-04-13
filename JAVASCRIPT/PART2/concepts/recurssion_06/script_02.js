function countDigit(n) {
  if (n === 0) return 0;
  return 1 + countDigit(Math.floor(n / 10));
}
console.log(countDigit(546));

/*
 countDigit(546)
 = 1 + countDigit(54)
 = 1 + (1 + countDigit(5))
 = 1 + (1 + (1 + countDigit(0)))
 = 1 + (1 + (1 + 0)) 
 = 3
*/
function revNum(n, result) {
  if (n < 10) return result;
  //   return (
  //     (n % 10) * 10 ** Number(String(Math.floor(n / 10)).length) +
  //     revNum(Math.floor(n / 10))
  //   );

  return result * 10 + revNum(n % 10);
}

console.log(revNum(7678, 0));

/*
1234 % 10 = 4 * 1000 = 4000
123 % 10  = 3 * 100 =   300
12 % 10 = 2 * 10 =       20
1 % 10 = 1 *  1 =         1
 
revNum(1234)
= last Digit * 10 ^ (remianig digit) + rev(remaning number) 

*/
