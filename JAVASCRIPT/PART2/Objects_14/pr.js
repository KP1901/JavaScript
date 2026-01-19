// Deep freeze

const user = {
  name: "Kiran",
  address: {
    city: "Pune",
    geo: {
      lat: 10,
      lng: 20,
    },
  },
};

delete user.address.city;

// function deepFreeze(user) {
//   Object.freeze(user);

//   for (let key in user) {
//     if (typeof user[key] == "object" && user[key] !== null) {
//       // deepFreeze(user[key]);
//     }
//   }
// }
// deepFreeze(user);

console.log(Object.isFrozen(user.address.city));
