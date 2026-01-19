// 🧠 Challenge 1 — Borrow a Method (Real-world: Shared Utility)

const empolyee = {
  name: "kiran",
  introduce: function (role) {
    console.log(`Hi i am ${this.name} and I work as a ${role}.`);
  },
};

const freelancer = { name: "Ravi" };

empolyee.introduce.call(freelancer, "Designer");

// ⚙️ Challenge 2 — Invoice Generator

const billing = {
  generateInvoice: function (amount, tax) {
    const total = amount + amount * tax;
    console.log(`${this.customer} has to pay ${total}`);
  },
};
const user = { customer: "ALex" };

billing.generateInvoice.call(user, 1000, 0.18);

// 🎯 Challenge 3 — Reuse Validator

function checkLength(minLength) {
  if (this.value.length >= minLength) {
    console.log(`${this.field} is valid ✅`);
  } else {
    console.log(`${this.field} is too short ❌`);
  }
}
const username = { field: "Username", value: "Ki" };
const password = { field: "Password", value: "kiran123" };

checkLength.call(username, 4);
checkLength.call(password, 4);
