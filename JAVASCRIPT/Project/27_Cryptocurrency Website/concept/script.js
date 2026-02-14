// JSON String (serialized data - text format)
const data = '{"stream":"btcusdt@trade","data":{"s":"BTCUSDT","p":"96500.21"}}';

/*
JSON format (text representation, not a real object yet)

{
  "name": "Kiran"
}

JavaScript Object (real object in memory)

const obj = {
  name: "kiran"
};
*/

// String ➜ JavaScript Object (Deserialization)
const d = JSON.parse(data);
console.log(d);

// JavaScript Object ➜ String (Serialization)
const c = JSON.stringify(d);
console.log(c);
