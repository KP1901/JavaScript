const bitconEl = document.getElementById("bitcoin");
const dogeEl = document.getElementById("dogecoin");
const ethereumEl = document.getElementById("ethereum");

async function setupLivePrices() {
  const response = await fetch("https://api.binance.com/api/v3/ticker/price");

  const data = await response.json();

  data.forEach((item) => {
    if (item.symbol === "BTCUSDT") {
      bitconEl.textContent = Number(item.price).toFixed(2);
    } else if (item.symbol === "ETHUSDT") {
      ethereumEl.textContent = Number(item.price).toFixed(2);
    } else if (item.symbol === "DOGEUSDT") {
      dogeEl.textContent = Number(item.price).toFixed(5);
    }
  });
}
setupLivePrices();
// setInterval(setupLivePrices, 1000);
