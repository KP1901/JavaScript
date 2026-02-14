const bitcoinEl = document.getElementById("bitcoin");
const ethereumEl = document.getElementById("ethereum");
const dogeEl = document.getElementById("dogecoin");

const socket = new WebSocket(
  "wss://stream.binance.com:9443/stream?streams=btcusdt@trade/ethusdt@trade/dogeusdt@trade",
);

// socket.send("Hello how are you");

socket.addEventListener("open", () => {
  console.log("Connected");
});

socket.addEventListener("error", () => {
  console.log("Something went wrong");
});

socket.addEventListener("close", () => {
  console.log("Connection closed");
});

socket.addEventListener("message", function (event) {
  // server sends data in text (string) which we convert into real object so we can access its property
  const message = JSON.parse(event.data);
  const data = message.data;

  const price = Number(data.p);
  if (data.s === "BTCUSDT") {
    bitcoinEl.textContent = price.toFixed(2);
  } else if (data.s === "ETHUSDT") {
    ethereumEl.textContent = price.toFixed(2);
  } else if (data.s === "DOGEUSDT") {
    dogeEl.textContent = price.toFixed(5);
  }
});

// socket.onmessage = function (event) {
//   const message = JSON.parse(event.data);
//   const data = message.data;

//   const price = Number(data.p);

//   if (data.s === "BTCUSDT") {
//     bitcoinEl.textContent = price.toFixed(2);
//   } else if (data.s === "ETHUSDT") {
//     ethereumEl.textContent = price.toFixed(2);
//   } else if (data.s === "DOGEUSDT") {
//     dogeEl.textContent = price.toFixed(5);
//   }
// };
