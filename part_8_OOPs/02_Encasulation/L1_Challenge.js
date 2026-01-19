/*

Scenario:
You are building a secure digital vault system where each user has a vault with sensitive items. You need to:

Keep the items private (no one can access the array directly).

Allow users to add items, remove items, and view items, but only through controlled methods.

Ensure data integrity — for example, you cannot remove an item that doesn’t exist.
*/

function Vault(userName) {
  let items = [];

  this.userName = userName;

  this.addItem = function (item) {
    if (item) {
      items.push(item);
      console.log(`added ${item}`);
    }
  };

  this.removeItem = function (item) {
    const index = items.indexOf(item);
    if (index !== -1) {
      items.splice(index, 1);
      console.log(`Removed ${item}`);
    } else {
      console.log(`Item not found`);
    }
  };

  this.viewItem = function (item) {
    // return [...items];
    console.log(items);
  };
}

let vault1 = new Vault("Alice");
vault1.addItem("Gold Chain");
vault1.addItem("Silver Chain");
vault1.addItem("Platinum Chain");

vault1.viewItem();

vault1.removeItem("Silver Chain");

vault1.viewItem();

console.log(vault1.items);
