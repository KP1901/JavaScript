/*
When you write:

e.target.closest(".btn")

It does this:

1.Start from the element that was actually clicked (e.target)
2.Check → does this element match .btn?
3.If NO → go to its parent
4.Check parent → does it match .btn?
5.Keep going upward until:
   -It finds .btn ✅
   -Or reaches the top and finds nothing ❌ (returns null)


Now imagine clicking empty area inside .controls

Structure:

.controls
   ├── span.btn
   ├── span.btn
   └── div.random


User clicks .random:

-.random → not .btn
-Parent .controls → not .btn
-Parent .product → not .btn
-Parent body → not .btn
-Reaches top → returns null

That’s why we must check:

if (!btn) return;

🔥 Important Concept

closest() searches upward, not downward.

It never searches children.
Only parents.

IMP : 

1️⃣ classList.contains("btn")

Checks ONLY the element you clicked.

Example:

e.target.classList.contains("btn")


It asks:

“Does the clicked element itself have class btn?”

It does NOT check parents.

2️⃣ closest(".btn")

Checks:

-The clicked element
-Then its parent
-Then grandparent
-Until it finds .btn

It climbs upward.
*/
