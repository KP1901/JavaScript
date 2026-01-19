// access key from unspalsh api
const accessKey = "oCX97Q7IHPLLiyycGlZ3CNVNrqHH0fyG57TD9ilB7qw";

// element access to manipulate
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchButtonEl = document.getElementById("search-button");
const searchResultsEl = document.querySelector(".search-results");
const showMoreBtnEl = document.getElementById("show-more-button");

let page = 1;
let preSearch = "";

async function searchImage() {
  try {
    let inputData = searchInputEl.value;

    if (preSearch !== inputData) {
      searchResultsEl.innerHTML = "";
      preSearch = inputData;
    }
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    console.log(url);

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(data);

    results.map((result) => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("search-result");

      const imgage = document.createElement("img");
      imgage.src = result.urls.small;
      imgage.alt = result.alt_description;

      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.textContent = result.alt_description;
      imageLink.target = "_blank";
      imageLink.rel = "noopener noreferrer";

      imageWrapper.appendChild(imgage);
      imageWrapper.appendChild(imageLink);

      searchResultsEl.appendChild(imageWrapper);
    });

    page++;

    if (page >= 1) {
      showMoreBtnEl.style.display = "block";
    }
  } catch (error) {}
}

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  searchImage();
});

showMoreBtnEl.addEventListener("click", searchImage);

/*  
problems i faced 
1. how will fill the data inside html => here we used dynamic content to insert the data (by using createlement) and map which return every result not using the innerHTML
2.how to hide button and only appear when it has more than 1 page
3.i want call the fuction again so i get the result of second page but i was calling it noraml way which returns error so used call it in callback way
4. first we were searching for cat then cat will added inside container but when search another as lione it added to cat elemetns so we have to remove the previosu cat stored images
*/
