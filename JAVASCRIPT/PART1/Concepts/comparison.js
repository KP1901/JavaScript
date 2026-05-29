let user = [{ category: "beauty" }, { category: "shepard" }];

user = [...user].sort((a, b) => a.category.localeCompare(b.category));

console.log(user);

/*

a.category => beauty 
b.category => shepard

return > 0  → b comes before a (swap)
return < 0  → a comes before b (keep order)
return 0    → same

a.localeCompare(b) // A → Z
b.localeCompare(a) // Z → A
*/
