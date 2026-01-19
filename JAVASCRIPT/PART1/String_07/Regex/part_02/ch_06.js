// 6️⃣ Question: Match date parts (year, month, day) from "2025-09-15"

let str = "2025-09-15";
    console.log(str.match(/(\d{4})-(\d{2})-(\d{2})/));

/*
/ → start of regex

( → start of capture group

\ → escape character

d → digit (0–9)

{4} → exactly 4 digits (year)

) → end of capture group

- → literal hyphen

( → start of capture group

\d{2} → exactly 2 digits (month)

) → end of capture group

- → literal hyphen

( → start of capture group

\d{2} → exactly 2 digits (day)

) → end of capture group

/ → end of regex
*/