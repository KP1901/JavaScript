/*
✅ Correct rules (clean)
1️⃣ Loose equality (==)

👉 Mostly converts to NUMBER — but with exceptions

General rule:

Boolean → number

String → number

wrapper Object → primitive → then number

EXCEPTIONS:

null == undefined → true

No number conversion here

Examples
"5" == 5        // true  ("5" → 5)
true == 1       // true  (true → 1)
false == 0      // true
null == undefined // true (special rule)


📌 So:

Loose equality prefers numeric comparison, except special cases.

2️⃣ + operator (VERY IMPORTANT)

👉 String wins

Rule:

If either operand becomes a string → string concatenation

Otherwise → numeric addition

Examples
"5" + 1      // "51"
1 + "5"      // "15"
true + 1     // 2
null + 1     // 1


📌 + does NOT always convert to number.

3️⃣ Other arithmetic operators (- * / %)

👉 Always numeric conversion

"5" - 1   // 4
"5" * 2   // 10
"6" / 2   // 3


📌 No string concatenation here.

4️⃣ Explicit conversion (YOU control it)

👉 You decide the target type

Number("5")   // 5
String(10)    // "10"
Boolean(0)    // false


📌 This is not loose typing, this is intentional.

*/
