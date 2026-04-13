/*
🧠 What type of example is this?

👉 It is:

🔥 Promise Chaining (Sequential Async Operations)

Also called:

Async workflow pipeline

Dependent async operations

⚡ Why this is special

Each step depends on the previous step’s result

initBooking → addGuest → payment → final result

👉 You are passing the same booking object through the chain

*/

function initBooking(name) {
  return new Promise((resolve, reject) => {
    console.log("Booking Initiated");
    setTimeout(() => {
      resolve({
        bookingId: "1323232",
        name,
      });
    }, 2000);
  });
}

function addTheGuest(booking, ...guest) {
  return new Promise((resolve, reject) => {
    console.log(booking);
    console.log("Adding Guest..");
    setTimeout(() => {
      resolve({
        ...booking,
        guest,
      });
    }, 2000);
  });
}

function paymentStatus(booking, payment) {
  return new Promise((resolve, reject) => {
    console.log(booking);
    console.log("payment Processing...");
    setTimeout(() => {
      resolve({
        ...booking,
        payment,
      });
    }, 2000);
  });
}

function payment(booking, status) {
  return new Promise((resolve, reject) => {
    console.log(booking);
    console.log("payment Done.");
    setTimeout(() => {
      resolve({
        ...booking,
        status,
      });
    }, 2000);
  });
}

// initBooking("kiran")
//   .then((booking) => {
//     return addTheGuest(booking, "ajit", "uday");
//   })
//   .then((booking) => {
//     return paymentStatus(booking, {
//       paymentId: "12312331",
//       amount: 1232,
//     });
//   })
//   .then((booking) => {
//     return payment(booking, { payment: "done" });
//   })
//   .then((booking) => {
//     console.log(booking);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/*

fix 1 Problem : we were mutating the same object every time by 
 
booking["guest"] = guest

so better approach (non mutable)

resolve({
  ...booking,
  guest
})
*/
// now using async

async function BookingFlow() {
  try {
    let booking = await initBooking("kiran");
    booking = await addTheGuest(booking, "aj", "vj");
    booking = await paymentStatus(booking, {
      paymentId: "12312331",
      amount: 1232,
    });
    booking = await payment(booking, { payment: "done" });
    console.log(booking);
  } catch (error) {
    console.log(error);
  }
}
BookingFlow();
