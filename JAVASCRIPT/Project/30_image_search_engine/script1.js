const accessKey = "oCX97Q7IHPLLiyycGlZ3CNVNrqHH0fyG57TD9ilB7qw";
const searchFormEl = document.getElementById("search-from");
const searchBoxEl = document.getElementById("search-box");
const searchResultEl = document.getElementById("search-result");
const showMoreBtnEl = document.getElementById("show-more-btn");

let page = 1;

async function searchImage() {
  let keyword = searchBoxEl.value.trim();

  const response = await fetch(
    `https://api.unsplash.com/search/photos?&query=${keyword}&page=${page}&client_id=${accessKey}&per_page=20`,
  );

  const data = await response.json();

  const results = data.results;

  results.foreach((result) => {
    const img = document.createElement("img");
    img.src = result.urls.small;

    const anchorLink = document.createElement("a");
    anchorLink.href = result.links.html;
    anchorLink.target = "_blank";
    anchorLink.appendChild(img);
    searchResultEl.append(anchorLink);
  });

  showMoreBtnEl.style.display = "block";
}

// searchFormEl.addEventListener("submit", searchImage);

searchFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  searchResultEl.innerHTML = "";
  page = 1;
  searchImage();
});

showMoreBtnEl.addEventListener("click", () => {
  ++page;
  searchImage();
});
// searchFormEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   searchImage();
// });
