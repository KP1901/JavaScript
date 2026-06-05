let vk = "1902-12-12 1230-12-43"

let res = vk.match(/(\d{4})-(\d{2})-(\d{2})/g);
console.log(res);

console.log(res[0]);
console.log(res[1]);
console.log(res[2]);
console.log(res[3]);
console.log();
