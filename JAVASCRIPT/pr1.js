const user = {
  name: "kiran",
};

function description(...args) {
  let [city, address] = args;

  console.log(`${this.name} live in ${city}in ${address}`);
}
description.apply(user, ["Udgir", "Shivaji Chowk"]);
