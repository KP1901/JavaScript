// Question: Rearrange date to DD/MM/YYYY from "2025-09-15"

let str = "2025-09-15";

console.log(str.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1"));

/*
/(\d{4})-(\d{2})-(\d{2})/
/ → start of regex

( → start capture group 1

\d → digit (0–9)

{4} → exactly 4 digits (year)

) → end capture group 1

- → literal hyphen

( → start capture group 2

\d{2} → exactly 2 digits (month)

) → end capture group 2

- → literal hyphen

( → start capture group 3

\d{2} → exactly 2 digits (day)

) → end capture group 3

/ → end of regex
*/

/*
replace should be always "string"

"$3/$2/$1"

$3 → 3rd group → day

/ → literal slash

$2 → 2nd group → month

/ → literal slash

$1 → 1st group → year

*/
