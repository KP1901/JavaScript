const scriptURL =
  "https://script.google.com/macros/s/AKfycbyMm30PKBJjVn3Rxx2V2o091mX_m5K5LpjeWxz_V7PlNNndZJB4EihudKQx9um7_M8eLw/exec";

const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  async function fetchData() {
    const response = await fetch(scriptURL);
    const data = await response.json();
    console.log(data);
  }
  fetchData();
});

// 18 remaining