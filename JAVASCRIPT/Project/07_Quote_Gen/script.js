const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".new-quote");

let quotes = [];

async function loadData() {
  const response = await fetch("quotes.json");
  quotes = await response.json();
  showRandomQuote();
}

function showRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  quoteEl.textContent = quotes[randomIndex].quote;
  authorEl.textContent = `- ${quotes[randomIndex].author}`;
  
}
newQuoteBtn.addEventListener("click", showRandomQuote);

loadData();
